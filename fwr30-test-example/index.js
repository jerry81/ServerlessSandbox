const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  console.log("event stringified is ", JSON.stringify(event));
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
