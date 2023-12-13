const AppError = require("../Error/AppError.js");
const Menu = require("../Model/Menu.js");

const RestrictedMenusValidator = {
  validateMenus: (menus) => {
    const isValidMenu = menus.every(
      (menu) => menu === "" || Menu.isIncluded(menu)
    );

    if (!isValidMenu) {
      throw new AppError(`메뉴판에 없는 메뉴입니다.`);
    }
  },
  validateMenuNums: (menus) => {
    if (menus.length < 0 || menus.length > 2) {
      throw new AppError("못먹는 메뉴는 0개 이상 2개 이하로 입력해주세요.");
    }
  },

  check: (menus) => {
    RestrictedMenusValidator.validateMenus(menus);
    RestrictedMenusValidator.validateMenuNums(menus);
  },
};

module.exports = RestrictedMenusValidator;
