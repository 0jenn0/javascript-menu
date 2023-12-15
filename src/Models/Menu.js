import MENU from '../Constants/Menu.js';

export default class Menu {
  static #menu = MENU;

  static checkExistMenu(menu) {
    return Object.values(Menu.#menu).flat().includes(menu);
  }
}
