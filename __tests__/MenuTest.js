const Menu = require("../src/Model/Menu.js");

describe("Menu", () => {
  describe("isIncludedIn", () => {
    test("should return true when menus are included in the menu list", () => {
      expect(Menu.isIncludedIn(["규동", "우동"])).toBe(true);
    });
    test("should return false when menus are not included in the menu list", () => {
      expect(Menu.isIncludedIn(["아메리카노", "카페라떼", "카페모카"])).toBe(
        false
      );
    });
  });

  describe("isIncluded", () => {
    test("should return true when menu is included in the menu list", () => {
      expect(Menu.isIncluded("깐풍기")).toBe(true);
    });
    test("should return false when menu is not included in the menu list", () => {
      expect(Menu.isIncluded("딸기 케이크")).toBe(false);
    });
  });
});
