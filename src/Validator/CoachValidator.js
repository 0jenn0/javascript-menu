import AppError from '../Error/AppError.js';

const CoachValidator = Object.freeze({
  COACH_MIN_LENGTH: 2,
  COACH_MAX_LENGTH: 4,
  COACH_MIN_COUNT: 2,
  COACH_MAX_COUNT: 5,

  checkCoachNums: (coaches) => {
    if (
      coaches.length < CoachValidator.COACH_MIN_COUNT ||
      coaches.length > CoachValidator.COACH_MAX_COUNT
    ) {
      throw new AppError('코치는 최소 2명 이상 최대 5명 이하로 입력해야 합니다.');
    }
  },
  checkCoachNameLength: (coaches) => {
    coaches.forEach((coach) => {
      if (
        coach.length < CoachValidator.COACH_MIN_LENGTH ||
        coach.length > CoachValidator.COACH_MAX_LENGTH
      ) {
        throw new AppError('코치 이름은 최소 2글자 이상 최대 4글자 이하로 입력해야 합니다.');
      }
    });
  },
  checkDuplicate: (coaches) => {
    const coachSet = new Set(coaches);

    if (coachSet.size !== coaches.length) {
      throw new AppError('코치 이름이 중복되었습니다.');
    }
  },
  check: (coaches) => {
    CoachValidator.checkCoachNums(coaches);
    CoachValidator.checkCoachNameLength(coaches);
    CoachValidator.checkDuplicate(coaches);
  },
});

export default CoachValidator;
