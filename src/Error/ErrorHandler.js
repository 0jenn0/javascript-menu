const { Console } = require("@woowacourse/mission-utils");

const ErrorHandler = async (asyncFn, context) => {
  try {
    return await asyncFn.call(context);
  } catch (error) {
    Console.print(error.message);
    return ErrorHandler(asyncFn, context);
  }
};

module.exports = ErrorHandler;
