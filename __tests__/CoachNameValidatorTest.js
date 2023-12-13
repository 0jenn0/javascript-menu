const AppError = require("../src/Error/AppError.js");
const CoachNameValidator = require("../src/Validator/CoachNameValidator.js");

describe("coach name validator test", () => {
  test("check name length", () => {
    expect(() => {
      CoachNameValidator.checkNameLength("구구");
    }).not.toThrow();
    expect(
      () => {
        CoachNameValidator.checkNameLength("구구구구구");
      } // 5
    ).toThrow(`${AppError.PREFIX}`);
  });
});
