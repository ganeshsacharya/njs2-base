const serverless = require('./serverless');
const init = require('./src/library/roomHandler/init');
const websockets = require('./websockets');

module.exports.handler = async (event) => {
  try {
    const requestType = event.stageVariables.requestType;
    if (requestType === 'API') {
      return await serverless.execute(event);
    } else if (requestType === 'Socket') {
      let result = {};
      result = await websockets.handler(event);

      return result;
    } else if (requestType === 'processRoom') {
      return await init(event.content);
    } else if (requestType === 'scheduler') {

    }
  } catch (error) {
    console.error(error);
  }
};