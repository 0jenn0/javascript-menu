import Menu from '../Models/Menu.js';
import CoachValidator from '../Validator/CoachValidator.js';
import CommonValidator from '../Validator/CommonValidator.js';
import MenuValidator from '../Validator/MenuValidator.js';
import { InputView, OutputView } from '../View/index.js';
import { Console } from '@woowacourse/mission-utils';

export default class AppController {
  async start() {
    OutputView.printStartMessage();

    // 코치 이름 입력받기
    const coachNames = await InputView.promptCoachNames();
    CommonValidator.check(coachNames);
    CoachValidator.check(coachNames);

    // 못먹는 메뉴 입력받기
    let coachesWithRestrictedMenus = [];
    for (const coachName of coachNames) {
      const restrictedMenus = await InputView.promptRestrictedMenu(coachName);
      CommonValidator.checkExistSpace(restrictedMenus);
      MenuValidator.check(restrictedMenus);
      coachesWithRestrictedMenus.push({ name: coachName, restrictedMenus: restrictedMenus });
    }

    // 랜덤 카테고리뽑기
    const categories = Menu.pickRandomCategories();

    // 메뉴 추천
    const recommandResult = [];
    coachesWithRestrictedMenus.forEach(({ name, restrictedMenus }) => {
      const recommandedMenus = Menu.recommendMenu(categories, restrictedMenus);
      recommandResult.push({ name, recommandedMenus });
    });

    // 결과 출력
    Console.print('메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print(`[ 카테고리 | ${categories.join(' | ')} ]`);
    recommandResult.forEach(({ name, recommandedMenus }) => {
      Console.print(`[ ${name} | ${recommandedMenus.join(' | ')} ]`);
    });

    Console.print(`\n추천을 완료했습니다.`);
  }
}
