import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./FormTitle.less";

export default class FormTitle extends Component {
  static defaultProps = {
    title: ""
  };

  render() {
    const { title } = this.props;
    return <View className="c-form-title">{title}</View>;
  }
}
