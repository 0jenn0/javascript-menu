import AppError from "../Error/AppError.js";

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

  check(name) {
    this.checkIsEmpty(name);
    this.checkNameLength(name);
  },
};

export default CoachNameValidator;
