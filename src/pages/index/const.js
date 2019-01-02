export const [Modbus_RTU, Modbus_TCP, Dlt645_1997, Dlt645_2007] = [0, 1, 16, 17];
export const defaultDriveType = Modbus_RTU;
export const initialValue = {
  Basic_Info: {
    name: "",
    deviceId: "",
    brand: "",
    model: "",
    type: Modbus_RTU,
  },
  [Modbus_RTU]: {
    serialPort: 1,
    stationNum: "",
    baudRate: 9600,
    dataBit: 8,
    stopBit: 1,
    checkType: 0,
    crcOrder: 1
  },
  [Modbus_TCP]: {
    ip: "",
    port: "",
    crcOrder: 1
  },
  [Dlt645_1997]: {
    address: "",
    leadByte: "",
    baudRate: 9600,
    dataBit: 8,
    stopBit: 1,
    checkType: 0
  },
  [Dlt645_2007]: {
    address: "",
    leadByte: "",
    baudRate: 9600,
    dataBit: 8,
    stopBit: 1,
    checkType: 0
  },
  Sample_Info: {
    samplingInterval: 25,
    samplingTimeout: 1000,
    samplingRetry: 3,
    addrOffset: 0
  }
}


export const initialValidator = {
  Basic_Info: {
    name: [{
      type: "required",
      msg: "请输入"
    }],
    deviceId: [{
      type: "required",
      msg: "请输入"
    }],
    type: [{
      type: "required",
      msg: "请输入"
    }]
  },
  [Modbus_RTU]: {
    serialPort: [{
      type: "required",
      msg: "请输入"
    }],
    stationNum: [{
      type: "required",
      msg: "请输入"
    }],
    baudRate: [{
      type: "required",
      msg: "请输入"
    }],
    dataBit: [{
      type: "required",
      msg: "请输入"
    }],
    stopBit: [{
      type: "required",
      msg: "请输入"
    }],
    checkType: [{
      type: "required",
      msg: "请输入"
    }],
    crcOrder: [{
      type: "required",
      msg: "请输入"
    }]
  },
  [Modbus_TCP]: {
    ip: [{
      type: "required",
      msg: "请输入"
    }],
    port: [{
      type: "required",
      msg: "请输入"
    }],
    crcOrder: [{
      type: "required",
      msg: "请输入"
    }]
  },
  [Dlt645_1997]: {
    address: [{
      type: "required",
      msg: "请输入"
    }],
    leadByte: [{
      type: "required",
      msg: "请输入"
    }],
    baudRate: [{
      type: "required",
      msg: "请输入"
    }],
    dataBit: [{
      type: "required",
      msg: "请输入"
    }],
    stopBit: [{
      type: "required",
      msg: "请输入"
    }],
    checkType: [{
      type: "required",
      msg: "请输入"
    }]
  },
  [Dlt645_2007]: {
    address: [{
      type: "required",
      msg: "请输入"
    }],
    leadByte: [{
      type: "required",
      msg: "请输入"
    }],
    baudRate: [{
      type: "required",
      msg: "请输入"
    }],
    dataBit: [{
      type: "required",
      msg: "请输入"
    }],
    stopBit: [{
      type: "required",
      msg: "请输入"
    }],
    checkType: [{
      type: "required",
      msg: "请输入"
    }]
  },
  Sample_Info: {
    samplingInterval: [{
      type: "required",
      msg: "请输入"
    }],
    samplingTimeout: [{
      type: "required",
      msg: "请输入"
    }],
    samplingRetry: [{
      type: "required",
      msg: "请输入"
    }],
    addrOffset: [{
      type: "required",
      msg: "请输入"
    }]
  }
};
