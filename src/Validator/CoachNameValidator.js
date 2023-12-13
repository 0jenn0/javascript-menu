const AppError = require("../Error/AppError.js");

const CoachNameValidator = {
  checkNameLength(name) {
    if (name.length < 2 || name.length > 4) {
      throw new AppError("코치 이름은 2글자 이상 4글자 이하입니다.");
    }
  },

  checkIsEmpty(name) {
    if (name === "") {
      throw new AppError("코치 이름은 공백일 수 없습니다.");
    }
  },

  check(names) {
    this.checkCoachesNumber(names);
    names.forEach((name) => {
      this.checkIsEmpty(name);
      this.checkNameLength(name);
    });
  },

  checkCoachesNumber(coaches) {
    if (coaches.length < 2 || coaches.length > 5) {
      throw new AppError("코치는 2명 이상 5명 이하로 입력해주세요.");
    }
  },
};

module.exports = CoachNameValidator;
