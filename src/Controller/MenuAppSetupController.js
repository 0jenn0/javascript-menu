const ErrorHandler = require("../Error/ErrorHandler.js");
const Coach = require("../Model/Coach.js");
const CoachNameValidator = require("../Validator/CoachNameValidator.js");
const RestrictedMenusValidator = require("../Validator/RestrictedMenusValidator.js");
const InputView = require("../View/InputView.js");

const MenuAppSetupController = {
  async setupCoachNames() {
    const coachNames = await InputView.promptCoachNames();
    coachNames.forEach((name) => {
      CoachNameValidator.check(name);
    });

    return coachNames;
  },

  async setupRestrictedMenusForCoach(coachName) {
    const restrictedMenus = await InputView.promptRestrictedMenus(coachName);
    RestrictedMenusValidator.validateMenus(restrictedMenus);
    return restrictedMenus;
  },

  //   async initialize() {
  //     const coachNames = await ErrorHandler.retryOnErrors(this.setupCoachNames);
  //     const coaches = coachNames.map(async (coachName) => {
  //       const restrictedMenus = await ErrorHandler.retryOnErrors(
  //         this.setupRestrictedMenusForCoach.bind(this, coachName)
  //       );
  //       return new Coach(coachName, restrictedMenus);
  //     });

  //     return Promise.all(coaches); // Coach[]
  //   },

  async initialize() {
    const coachNames = await ErrorHandler.retryOnErrors(this.setupCoachNames);
    const coaches = [];

    for (const coachName of coachNames) {
      const restrictedMenus = await ErrorHandler.retryOnErrors(
        this.setupRestrictedMenusForCoach.bind(this, coachName)
      );
      coaches.push(new Coach(coachName, restrictedMenus));
    }

    return coaches; // Coach[]
  },
};

module.exports = MenuAppSetupController;
