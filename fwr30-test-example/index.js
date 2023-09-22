const AWS = require('aws-sdk');

module.exports.handler = async (event, context) => {
  console.log("event stringified is ", JSON.stringify(event));
  console.log("context stringified is ", JSON.stringify(context));
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
