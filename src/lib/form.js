import { isNil } from "./util";
const VALIDATOR = {
  required: value => value !== undefined && value !== null && value !== "",
  maxLength: (val, { max }) => `${val || ""}`.split("").length <= max,
  minLength: (val, { min }) => `${val || ""}`.split("").length >= min,
  pattern: (val, { reg }) =>
    Array.isArray(reg) ? reg.every(i => i.test(val)) : reg.test(val),
  validator: (val, { validator, values }) => validator(val, values)
};

export default class Form {
  constructor(value = {}, validator = {}) {
    this.init({ ...value }, { ...validator });
  }

  init = (value, validator) => {
    this.errors = this.getInitialErrors(value, validator);
    this.value = this.createAutoValidate(value);
    this.validator = validator;
    this.initialValue = Object.assign({}, { ...value });
  };

  formatKeys = keys => {
    return keys === undefined || keys === null || keys === ""
      ? Object.keys(this.value)
      : Array.isArray(keys)
        ? keys
        : [`${keys}`];
  };

  createAutoValidate = (value) => {
    return new Proxy(value, {
      set: (target, key, value, receiver) => {
        target[key] = isNil(value) ? "" : value;
        this.validate(key, this.getValue());
        return true;
      }
    });
  };

  getInitialErrors = (value, validator) => {
    return (Object.keys(value) || []).reduce((prev, key) => {
      // null means this form item should validate but has not been validated
      prev[key] =
        Array.isArray(validator[key]) &&
          validator[key].length &&
          validator[key].some(i => i.type === "required")
          ? null
          : [];
      return prev;
    }, {});
  }

  reset = () => {
    this.init(this.initialValue, this.validator);
    let value = this.getValue();
    let errors = this.getError();
    return {
      value,
      errors
    };
  };

  clear = (keys) => {
    let formKeys = this.formatKeys(keys);
    formKeys.forEach(formKey => {
      delete this.value[formKey];
      delete this.errors[formKey];
      delete this.validator[formKey];
    })
  }

  add = (value, validator) => {
    let formattedValue = Object.keys(value || {}).reduce((prev, key) => {
      prev[key] = isNil(value[key]) ? "" : value[key];
      return prev;
    }, {});
    this.value = this.createAutoValidate(Object.assign(this.getValue(), formattedValue));
    this.validator = Object.assign(this.validator, validator);
    this.errors = Object.assign(this.errors, this.getInitialErrors(value, validator));
  };

  change = (key, value) => {
    if (!isNil(value)) {
      this.value[key] = value;
    };
    return this.getValue();
  };

  validate = (keys, values) => {
    let formKeys = this.formatKeys(keys);
    formKeys.forEach(formKey => {
      const tagetValue = this.value[formKey];
      const validations = this.validator[formKey];
      this.errors[formKey] = (validations || []).reduce((prev, cur) => {
        let validator = VALIDATOR[cur.type];
        let options = Object.assign({ values }, cur.options || {});
        if (!validator(tagetValue, options)) {
          prev.push(cur);
        }
        return prev;
      }, []);
    });
    return this.errors;
  };

  hasError = keys => {
    let errors = this.getError(keys);
    return Object.values(errors).some(val => !Array.isArray(val) || val.length);
  };

  getError = keys => {
    let formKeys = this.formatKeys(keys);
    let errors = (formKeys || []).reduce((prev, key) => {
      prev[key] = this.errors[key];
      return prev;
    }, {});
    return errors;
  };

  getValue = keys => {
    let formKeys = this.formatKeys(keys);
    let value = (formKeys || []).reduce((prev, key) => {
      prev[key] = this.value[key];
      return prev;
    }, {});
    return value;
  };
}
