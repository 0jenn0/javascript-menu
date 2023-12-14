import { InputView } from '../View/index.js';

export default class SetupController {
  static async #setupData1() {
    const inputData1 = await InputView.prompt();
    // CoachNameValidator.check(coachNames);

    return inputData1;
  }

  // setupData2의 리턴 값이 Number여야하는 경우
  static async #setupData2() {
    const inputData2 = await InputView.prompt();
    // RestrictedMenusValidator.check(restrictedMenus); 여기서 숫자인지 이런거 다 체크하고

    return Number(inputData2);
  }

  static async initialize() {
    const data1 = await ErrorHandler(SetupController.#setupData1);
    const data2 = await ErrorHandler(SetupController.#setupData2);
    // 콜백함수에 파라미터 있는 경우는 바인딩해줘야함.
    //    const data2 = await ErrorHandler(SetupController.setupData2.bind(param));
    // this.인 경우
    //   const bonusNum = await ErrorHandler(this.setupBonusNum.bind(this, winnigLottoNums));

    return { data1, data2 }; // Coach[]
  }
}
