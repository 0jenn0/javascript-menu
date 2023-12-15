import AppError from '../Error/AppError.js';
import Menu from '../Models/Menu.js';

const MenuValidator = Object.freeze({
  checkExist: (menus) => {
    menus.forEach((menu) => {
      if (!Menu.checkExistMenu(menu)) {
        throw new AppError('존재하지 않는 메뉴가 있습니다.');
      }
    });
  },
  check: (menus) => {
    MenuValidator.checkExist(menus);
  },
});

export default MenuValidator;
