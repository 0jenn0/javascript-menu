const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMessage: () => {
    Console.print("점심 메뉴 추천을 시작합니다.");
  },
  printEndMessage: () => {
    Console.print("추천을 완료했습니다.");
  },
};

module.exports = OutputView;
