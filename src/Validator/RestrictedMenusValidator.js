import AppError from "../Error/AppError.js";
import Menu from "../Model/Menu.js";

const RestrictedMenus = {
  validateMenus: (menus) => {
    const menu = menus.find((menu) => !Menu.isIncluded(menu));
    if (menu) {
      throw new AppError(`메뉴판에 없는 메뉴입니다.`);
    }
  },
};

export default RestrictedMenus;
