const { Console } = require("@woowacourse/mission-utils");
const SYMBOL = require("../Constant/Symbol.js");

const InputView = {
  promptCoachNames: async () => {
    const coachNames = await Console.readLineAsync(
      "코치의 이름을 입력해 주세요. (, 로 구분)"
    );

    return coachNames.split(SYMBOL.COMMA);
  },

  promptRestrictedMenus: async (coachName) => {
    const restrictedMenus = await Console.readLineAsync(
      `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.`
    );

    return restrictedMenus.split(SYMBOL.COMMA);
  },
};

module.exports = InputView;
