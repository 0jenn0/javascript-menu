const Menu = require("../Model/Menu.js");
const OutputView = require("../View/OutputView.js");
const MenuAppSetupController = require("./MenuAppSetupController.js");

const MenuAppController = {
  async start() {
    OutputView.printStartMessage();

    const coaches = await MenuAppSetupController.initialize();

    const categories = Menu.pickRandomCategories();
    OutputView.printResultMessage();
    OutputView.printHeader();
    OutputView.printCategories(categories);
    coaches.forEach((coach) => {
      const recommanededMenus = coach.recommendMenus(categories);
      OutputView.printRecommendMenu(coach.getName(), recommanededMenus);
    });
    OutputView.printEndMessage();
  },
};

module.exports = MenuAppController;
