const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMessage: () => {
    Console.print("점심 메뉴 추천을 시작합니다.");
  },
  printResultMessage: () => {
    Console.print(`\n메뉴 추천 결과입니다.`);
  },
  printHeader: () => {
    const days = ["월요일", "화요일", "수요일", "목요일", "금요일"];
    let header = "[ 구분 | " + days.join(" | ") + " ]";
    Console.print(header);
  },
  printCategories: (categories) => {
    let dataRow = "[ 카테고리 | " + categories.join(" | ") + " ]";

    Console.print(dataRow);
  },
  printRecommendMenu: (coachName, menus) => {
    let dataRow = `[ ${coachName} | ` + Object.values(menus).join(" | ") + " ]";
    Console.print(dataRow);
  },
  printEndMessage: () => {
    Console.print(`\n추천을 완료했습니다.`);
  },
};

module.exports = OutputView;
