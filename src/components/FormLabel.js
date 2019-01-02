import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./FormLabel.less";

const baseStyle = "width: 30rpx; height: 30rpx;";
const leftIconStyle = `${baseStyle} margin-right: 20rpx`;
const rightIconStyle = `${baseStyle} margin-left: 10rpx`;

export default class FormLabel extends Component {
  static defaultProps = {
    leftIcon: "",
    rightIcon: "",
    text: "",
    onRightIconClick: null,
    size: ""
  };

  onRightIconClick = () => {
    const { onRightIconClick } = this.props;
    typeof onRightIconClick === "function" && onRightIconClick();
  };

  render() {
    const { leftIcon, rightIcon, text, size } = this.props;
    const className = ["c-form-label", size || ""];
    return (
      <View className={className}>
        {!!leftIcon && <Image src={leftIcon} style={leftIconStyle} />}
        <Text>{text}</Text>
        {!!rightIcon && (
          <Image
            src={rightIcon}
            style={rightIconStyle}
            onClick={this.onRightIconClick.bind(this)}
          />
        )}
      </View>
    );
  }
}
