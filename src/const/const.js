export const DriveTypeOptions = [
  { label: 'Modbus_RTU', value: 0 },
  { label: 'Modbus_TCP', value: 1 },
  { label: 'DL/T645-1997', value: 16 },
  { label: 'DL/T645-2007', value: 17 }
];

export const BaudRateOptions = [
  { label: '110', value: 110 },
  { label: '300', value: 300 },
  { label: '600', value: 600 },
  { label: '1200', value: 1200 },
  { label: '2400', value: 2400 },
  { label: '4800', value: 4800 },
  { label: '9600', value: 9600 },
  { label: '14400', value: 14400 },
  { label: '19200', value: 19200 },
  { label: '38400', value: 38400 },
  { label: '56000', value: 56000 },
  { label: '57600', value: 57600 },
  { label: '115200', value: 115200 },
  { label: '128000', value: 128000 },
  { label: '256000', value: 256000 }
];

export const SerialPortOptions = [
  { label: 'COM1', value: 1 },
  { label: 'COM2', value: 2 },
  { label: 'COM3', value: 3 },
  { label: 'COM4', value: 4 }
];

export const CrcOrderOptions = [
  { label: '大端', value: 0 },
  { label: '小端', value: 1 }
];

export const DataBitOptions = [
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 }
];

export const StopBitOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '1.5', value: 3 }
];

export const CheckTypeOptions = [
  { label: '无校验', value: 0 },
  { label: '奇校验', value: 1 },
  { label: '偶校验', value: 2 },
  { label: 'Mark', value: 3 },
  { label: 'Space', value: 4 }
];

export const AddrOffsetOptions = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
];