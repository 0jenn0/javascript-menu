import CoachValidator from '../Validator/CoachValidator.js';
import CommonValidator from '../Validator/CommonValidator.js';
import MenuValidator from '../Validator/MenuValidator.js';
import { InputView, OutputView } from '../View/index.js';

export default class AppController {
  async start() {
    // 시작 메시지 출력
    // 입력 받기 (prompt)
    // this.#setupController.initialize();
    // 서비스 로직
    // 출력
    OutputView.printStartMessage();
    const coachNames = await InputView.promptCoachNames();
    CommonValidator.check(coachNames);
    CoachValidator.check(coachNames);

    let coachesWithRestrictedMenus = [];
    for (const coachName of coachNames) {
      const restrictedMenus = await InputView.promptRestrictedMenu(coachName);
      CommonValidator.checkExistSpace(restrictedMenus);
      MenuValidator.check(restrictedMenus);
      coachesWithRestrictedMenus.push({ name: coachName, restrictedMenus: restrictedMenus });
    }
  }
}
