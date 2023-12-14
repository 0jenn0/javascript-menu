import { Console } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  printStartMessage: () => {
    Console.print(`점심 메뉴 추천을 시작합니다.\n`);
  },
  printRecommendation: (coachName, menu) => {
    Console.print('메뉴 추천 결과입니다.');
  },
});

export default OutputView;
