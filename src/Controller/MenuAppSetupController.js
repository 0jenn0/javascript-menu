const ErrorHandler = require("../Error/ErrorHandler.js");
const Coach = require("../Model/Coach.js");
const CoachNameValidator = require("../Validator/CoachNameValidator.js");
const RestrictedMenusValidator = require("../Validator/RestrictedMenusValidator.js");
const InputView = require("../View/InputView.js");

class MenuAppSetupController {
  static async setupCoachNames() {
    const coachNames = await InputView.promptCoachNames();
    CoachNameValidator.check(coachNames);

    return coachNames;
  }

  static async setupRestrictedMenusForCoach(coachName) {
    const restrictedMenus = await InputView.promptRestrictedMenus(coachName);
    RestrictedMenusValidator.check(restrictedMenus);
    return restrictedMenus;
  }

  static async initialize() {
    const coachNames = await ErrorHandler(
      MenuAppSetupController.setupCoachNames
    );

    const coaches = [];

    for (const coachName of coachNames) {
      const restrictedMenus = await ErrorHandler(
        MenuAppSetupController.setupRestrictedMenusForCoach.bind(coachName)
      );
      coaches.push(new Coach(coachName, restrictedMenus));
    }

    return coaches; // Coach[]
  }
}

module.exports = MenuAppSetupController;
