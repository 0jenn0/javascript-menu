import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../Constants/constants.js';
import SYMBOLS from '../Constants/symbol.js';

const OutputView = Object.freeze({
  printStartMessage: () => {
    Console.print(`점심 메뉴 추천을 시작합니다.\n`);
  },
  printRecommendation: () => {
    Console.print('메뉴 추천 결과입니다.');
  },
  printWeekdays: () => {
    Console.print(OutputView.createHeader(['구분', ...CONSTANTS.WEEKDAYS]));
  },
  printCategories: (categories) => {
    Console.print(OutputView.createHeader(['카테고리', ...categories]));
  },
  printRecommendMenus: (recommandResult) => {
    recommandResult.forEach(({ name, recommandedMenus }) => {
      Console.print(OutputView.createHeader([name, ...recommandedMenus]));
    });
  },
  printEndMessage: () => {
    Console.print(`\n추천을 완료했습니다.`);
  },

  createHeader: (contents) => {
    return `${SYMBOLS.openBracket}${contents.join(SYMBOLS.pipeWithSpaces)}${SYMBOLS.closeBracket}`;
  },
});

export default OutputView;
