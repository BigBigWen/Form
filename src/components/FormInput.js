import Taro, { Component } from "@tarojs/taro";
import { View, Input } from "@tarojs/components";
import "./FormInput.less";

export default class FormInput extends Component {
  static defaultProps = {
    inputStyle: "",
    disabled: false,
    placeholder: "",
    value: "",
    inputType: "text",
    maxLength: -1
  };
  onInput = e => {
    e.preventDefault();
    const { onInput, formKey } = this.props;
    if (typeof onInput === "function") {
      onInput(formKey, e.target.value);
    }
  };
  render() {
    const {
      wrapperStyle,
      inputStyle,
      disabled,
      placeholder,
      value,
      inputType,
      maxLength
    } = this.props;
    return (
      <View className="c-input" style={wrapperStyle}>
        <Input
          className="input"
          onInput={this.onInput.bind(this)}
          onConfirm={this.props.onConfirm}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          adjustPosition={false}
          placeholderStyle="color: #B2B2B2"
          type={inputType || "text"}
          style={inputStyle}
          maxlength={parseFloat(maxLength || -1)}
        />
      </View>
    );
  }
}
