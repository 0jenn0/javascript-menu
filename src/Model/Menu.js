import MENU from "../Constant/Menu";

export default class Menu {
  #menu = MENU;

  static isIncluded(menu) {
    return Object.values(this.#menu).some((menus) => menus.includes(menu));
  }

  static isIncludedIn(menus) {
    return menus.every((menu) => this.isIncluded(menu));
  }
}
