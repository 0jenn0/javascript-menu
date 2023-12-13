const OutputView = require("../View/OutputView.js");
const MenuAppSetupController = require("./MenuAppSetupController.js");

const MenuAppController = {
  async start() {
    OutputView.printStartMessage();
    const coaches = await MenuAppSetupController.initialize();
  },
};

module.exports = MenuAppController;
