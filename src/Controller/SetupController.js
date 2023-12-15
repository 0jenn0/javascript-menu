import { InputView } from '../View/index.js';
import { CoachValidator, CommonValidator, MenuValidator } from '../Validator/index.js';

export default class SetupController {
  static async setupCoachNames() {
    const coachNames = await InputView.promptCoachNames();
    CommonValidator.check(coachNames);
    CoachValidator.check(coachNames);

    return coachNames;
  }

  static async setupRestrictedMenus(coachNames) {
    const restrictedMenusPromises = coachNames.map(async (coachName) => {
      const restrictedMenus = await InputView.promptRestrictedMenu(coachName);
      CommonValidator.checkExistSpace(restrictedMenus);
      MenuValidator.check(restrictedMenus);
      return { name: coachName, restrictedMenus };
    });

    const coachesWithRestrictedMenus = await Promise.all(restrictedMenusPromises);
    return coachesWithRestrictedMenus;
  }
}
