const AWS = require('aws-sdk');


const measurementMap = [
  {
    key: 'd',
    name: 'distance',
    unit: 'millimetre',
    type: 'measurement',
  },
  {
    key: 'l',
    name: 'level',
    unit: 'percent',
    type: 'measurement',
  },
  {
    key: 'ld',
    name: 'level_distance',
    unit: 'millimetre',
    type: 'measurement',
  },
  {
    key: 'q',
    name: 'signal_quality',
    unit: 'other',
    type: 'measurement',
  },
  {
    key: 'te',
    name: 'temperature',
    unit: 'degree_celsius',
    type: 'measurement',
  },
  {
    key: 'a',
    name: 'angle',
    unit: 'degree_angular',
    type: 'measurement',
  },
  {
    key: 'bat',
    name: 'battery',
    unit: 'other',
    type: 'battery',
  },
  {
    key: 'rssi',
    name: 'rssi',
    unit: 'decibel_milliwatt',
    type: 'rssi',
  },
];

/*

{
    "message": "Hello from Amazon IoT console JT",
    "clientId": "iotconsole-fd3f4e07-04cf-4fd3-b0d5-3a58e12d987a",
    "serial_number": "1592059",
    "iot_topic": "mc/faggot/1592059"
}

*/

module.exports.handler = async (event, context) => {
  console.log("event stringified is ", JSON.stringify(event));
  console.log("context stringified is ", JSON.stringify(context));
  const sn = event?.serial_number;
  let shadowToSave = {serial_number};

  const dat = event?.data
  const mea = dat?.meas
  const stat = dat?.status
  let props = { distance: mea[0]['d'], battery: stat['bat']};

  shadowToSave['properties'] = props;
  const iotData = new AWS.IotData({ endpoint: "axujhlqgnr4ft.ats.iot.cn-north-1.amazonaws.com.cn" });

  iotData
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `check shadow - should be updated with ${JSON.stringify(shadowToSave)}`,
        input: event,
      },
      null,
      2
    ),
  };
};
