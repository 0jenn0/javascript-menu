const CONSTANTS = Object.freeze({
  MAX_RESTRICTED_MENU_COUNT: 2, // 최대 못 먹는 메뉴 수
  WEEKDAYS: ['월요일', '화요일', '수요일', '목요일', '금요일'], // 주중 요일
  MAX_CATEGORY_OCCURRENCE: 2, // 한 주에 최대 카테고리 선택 횟수
  START_MESSAGE: '점심 메뉴 추천을 시작합니다.', // 서비스 시작 메시지
  RESULT_MESSAGE: '메뉴 추천 결과입니다.', // 서비스 결과 메시지
  END_MESSAGE: '추천을 완료했습니다.', // 서비스 종료 메시지
  COACH_NAME_PROMPT: '코치의 이름을 입력해 주세요. (, 로 구분)', // 코치 이름 입력 메시지
  RESTRICTED_MENU_PROMPT: '(이)가 못 먹는 메뉴를 입력해 주세요.', // 못 먹는 메뉴 입력 메시지
  COACH_MIN_ERROR: '코치는 최소 2명 이상 입력해야 합니다.', // 최소 코치 수 에러 메시지
});

export default CONSTANTS;
