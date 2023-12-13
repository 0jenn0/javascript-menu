const Console = require("@woowacourse/mission-utils/dist/Console");

const ErrorHandler = {
  async retryOnErrors(executeFunction) {
    try {
      return await executeFunction();
    } catch (error) {
      Console.print(error.message);
      return this.retryOnErrors(executeFunction);
    }
  },
};

module.exports = ErrorHandler;
