import CoachValidator from '../Validator/CoachValidator.js';
import CommonValidator from '../Validator/CommonValidator.js';
import MenuValidator from '../Validator/MenuValidator.js';
import { InputView } from '../View/index.js';

export default class SetupController {
  static async setupCoachNames() {
    const coachNames = await InputView.promptCoachNames();
    CommonValidator.check(coachNames);
    CoachValidator.check(coachNames);

    return coachNames;
  }

  static async setupRestrictedMenus(coachNames) {
    let coachesWithRestrictedMenus = [];
    for (const coachName of coachNames) {
      const restrictedMenus = await InputView.promptRestrictedMenu(coachName);
      CommonValidator.checkExistSpace(restrictedMenus);
      MenuValidator.check(restrictedMenus);
      coachesWithRestrictedMenus.push({ name: coachName, restrictedMenus: restrictedMenus });
    }

    return coachesWithRestrictedMenus;
  }
}
