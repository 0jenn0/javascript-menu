import { Console } from '@woowacourse/mission-utils';
import SYMBOLS from '../Constants/symbol.js';

const InputView = Object.freeze({
  promptCoachNames: async () => {
    const input = await Console.readLineAsync(`코치의 이름을 입력해 주세요. (, 로 구분)\n`);

    return input.split(SYMBOLS.comma);
  },

  promptRestrictedMenu: async (coachName) => {
    const input = await Console.readLineAsync(`\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.`);

    return input.split(SYMBOLS.comma);
  },
});

export default InputView;
