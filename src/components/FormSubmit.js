import Taro, { Component } from "@tarojs/taro";
import { Button } from "@tarojs/components";
import "./FormSubmit.less";

export default class FormSubmit extends Component {
  onClick = () => {
    const { disabled, onSubmit } = this.props;
    if (disabled || typeof onSubmit !== "function") {
      return;
    }
    onSubmit();
  };

  render() {
    const { text, disabled, btnStyle } = this.props;
    return (
      <Button
        className={["c-form-submit-btn", disabled ? "disabled" : ""]}
        onClick={this.onClick.bind(this)}
        style={btnStyle}
      >
        {text}
      </Button>
    );
  }
}
