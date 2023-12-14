import AppError from '../Error/AppError.js';

const CoachValidator = Object.freeze({
  checkCoachNums: (coaches) => {
    if (coaches.length < 2 || coaches.length > 5) {
      throw new AppError('코치는 최소 2명 이상 최대 5명 이하로 입력해야 합니다.');
    }
  },
  checkCoachNameLength: (coaches) => {
    coaches.forEach((coach) => {
      if (coach.length < 2 || coach.length > 4) {
        throw new AppError('코치 이름은 최소 2글자 이상 최대 4글자 이하로 입력해야 합니다.');
      }
    });
  },
  check: (coaches) => {
    CoachValidator.checkCoachNums(coaches);
    CoachValidator.checkCoachNameLength(coaches);
  },
});

export default CoachValidator;
