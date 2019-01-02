import Taro, { Component } from "@tarojs/taro";
import { View, Picker } from "@tarojs/components";
import { isNil } from '../lib/util';
import "./FormPicker.less";

export default class FormPicker extends Component {
  static defaultProps = {
    pickerStyle: "",
    disabled: false,
    value: 0,
    mode: "selector",
    range: [],
    placeholder: ""
  };

  onChange = e => {
    e.preventDefault();
    const { onChange, formKey, range } = this.props;
    if (typeof onChange === "function") {
      let value = (range || [])[e.detail.value].value;
      onChange(formKey, isNil(value) ? null : value);
    }
  };

  render() {
    const {
      pickerStyle,
      disabled,
      value,
      range,
      mode,
      placeholder
    } = this.props;
    const index = (range || []).findIndex(i => `${i.value}` === `${value}`);
    const result = (range || [])[index];
    return (
      <View className="c-picker">
        <Picker
          className="picker"
          disabled={disabled}
          style={pickerStyle}
          value={index > -1 ? index : 0}
          range={range}
          mode={mode || "selector"}
          rangeKey="label"
          onChange={this.onChange.bind(this)}
        >
          <View className="label-wrapper">
            {!!result ? (
              <View className="label">{result.label}</View>
            ) : (
                <View className="placeholder">{placeholder}</View>
              )}
            <View className="icon" />
          </View>
        </Picker>
      </View>
    );
  }
}
