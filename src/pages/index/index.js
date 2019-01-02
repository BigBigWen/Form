import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import FormLabel from "../../components/FormLabel";
import FormInput from "../../components/FormInput";
import FormPicker from "../../components/FormPicker";
import FormSubmit from "../../components/FormSubmit";
import FormTitle from "../../components/FormTitle";
import Form from '../../lib/form';
import {
  DriveTypeOptions,
  BaudRateOptions,
  SerialPortOptions,
  CrcOrderOptions,
  DataBitOptions,
  StopBitOptions,
  CheckTypeOptions,
  AddrOffsetOptions
} from '../../const/const';
import {
  initialValue,
  initialValidator,
  defaultDriveType,
  Modbus_RTU,
  Modbus_TCP,
  Dlt645_1997,
  Dlt645_2007,
} from './const';
import { getInitialValue, getInitialValidator, shouldRender } from './lib';
import './index.less';
import '../../components/Form.less';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '表单演示页'
  }
  // add mode
  // constructor(props) {
  //   super(props);
  //   this.form = new Form(
  //     getInitialValue(defaultDriveType),
  //     getInitialValidator(defaultDriveType)
  //   );
  //   this.state = {
  //     value: this.form.getValue()
  //   };
  // }

  // edit mode
  constructor(props) {
    super(props);
    this.form = new Form({}, {});
    this.state = {
      value: {}
    }
  }

  componentDidShow() {
    Taro.showLoading({
      title: "数据加载中...",
      mask: true
    });
    setTimeout(this.loadData, 2000);
  }

  loadData = () => {
    this.form.add(
      getInitialValue(defaultDriveType),
      getInitialValidator(defaultDriveType)
    );
    this.setState({
      value: this.form.getValue()
    });
    Taro.hideLoading();
  };

  onTypeChange = (type) => {
    const currentType = this.state.value.type;
    this.form.clear(Object.keys(initialValue[currentType]));
    let newValue = initialValue[type];
    let newValidator = initialValidator[type];
    this.form.add(newValue, newValidator);
  }

  onChange = (name, val) => {
    if (name === 'type') {
      this.onTypeChange(val);
    }
    this.setState({
      value: this.form.change(name, val)
    });
  };

  render() {
    const { value } = this.state;
    const TCP = shouldRender(value.type, [Modbus_TCP]);
    const Modbus = shouldRender(value.type, [Modbus_RTU, Modbus_TCP]);
    const Dlt = shouldRender(value.type, [Dlt645_1997, Dlt645_2007]);
    const formItemClassNames = (show) => ["c-form-item", show ? "" : "hide"];
    console.log(JSON.stringify(value, null, 4));
    return (
      <View className='page-form-example'>
        <View className={["c-form", !!Object.keys(value).length ? "" : "hide"]}>
          <FormTitle title="表计表单" />
          <View className="c-form-item">
            <FormLabel text="表计名称" />
            <FormInput />
          </View>
          <View className="c-form-item">
            <FormLabel text="采集终端" />
            <FormInput />
          </View>
          <View className="c-form-item">
            <FormLabel text="表计品牌" />
            <FormPicker />
          </View>
          <View className="c-form-item">
            <FormLabel text="表计型号" />
            <FormPicker />
          </View>
          <View className="c-form-item">
            <FormLabel text="驱动类型" />
            <FormPicker
              formKey="type"
              value={value.type}
              onChange={this.onChange.bind(this)}
              range={DriveTypeOptions}
            />
          </View>
          <View className={formItemClassNames(!TCP)}>
            <FormLabel text="串口地址" />
            <FormPicker
              formKey="serialPort"
              value={value.serialPort}
              onChange={this.onChange.bind(this)}
              range={SerialPortOptions}
            />
          </View>
          <View className={formItemClassNames(Modbus)}>
            <FormLabel text="站号" />
            <FormInput
              formKey="stationNum"
              value={value.stationNum}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className={formItemClassNames(TCP)}>
            <FormLabel text="IP地址" />
            <FormInput
              formKey="ip"
              value={value.ip}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className={formItemClassNames(TCP)}>
            <FormLabel text="TCP端口" />
            <FormInput
              formKey="port"
              value={value.port}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className={formItemClassNames(Dlt)}>
            <FormLabel text="电表地址域" />
            <FormInput
              formKey="address"
              value={value.address}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className={formItemClassNames(Dlt)}>
            <FormLabel text="前导地址" />
            <FormInput
              formKey="leadByte"
              value={value.leadByte}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className={formItemClassNames(!TCP)}>
            <FormLabel text="波特率" />
            <FormPicker
              formKey="baudRate"
              value={value.baudRate}
              onChange={this.onChange.bind(this)}
              range={BaudRateOptions}
            />
          </View>
          <View className={formItemClassNames(!TCP)}>
            <FormLabel text="数据位" />
            <FormPicker
              formKey="dataBit"
              value={value.dataBit}
              onChange={this.onChange.bind(this)}
              range={DataBitOptions}
            />
          </View>
          <View className={formItemClassNames(!TCP)}>
            <FormLabel text="停止位" />
            <FormPicker
              formKey="stopBit"
              value={value.stopBit}
              onChange={this.onChange.bind(this)}
              range={StopBitOptions}
            />
          </View>
          <View className={formItemClassNames(!TCP)}>
            <FormLabel text="校验" />
            <FormPicker
              formKey="checkType"
              value={value.checkType}
              onChange={this.onChange.bind(this)}
              range={CheckTypeOptions}
            />
          </View>
          <View className={formItemClassNames(Modbus)}>
            <FormLabel text="CRC字节序" />
            <FormPicker
              formKey="crcOrder"
              value={value.crcOrder}
              onChange={this.onChange.bind(this)}
              range={CrcOrderOptions}
            />
          </View>
          <View className="c-form-item">
            <FormLabel text="采集间隔" />
            <FormInput
              formKey="samplingInterval"
              value={value.samplingInterval}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className="c-form-item">
            <FormLabel text="采集超时" />
            <FormInput
              formKey="samplingTimeout"
              value={value.samplingTimeout}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className="c-form-item">
            <FormLabel text="重试次数" />
            <FormInput
              formKey="samplingRetry"
              value={value.samplingRetry}
              onInput={this.onChange.bind(this)}
            />
          </View>
          <View className="c-form-item">
            <FormLabel text="首地址偏移" />
            <FormPicker
              formKey="addrOffset"
              value={value.addrOffset}
              onChange={this.onChange.bind(this)}
              range={AddrOffsetOptions}
            />
          </View>
        </View>
      </View>
    )
  }
}
