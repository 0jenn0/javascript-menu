const MENU = require("../Constant/Menu.js");

class Menu {
  static menu = MENU;

  static isIncluded(menu) {
    return Object.values(this.menu).some((menus) => menus.includes(menu));
  }

  static isIncludedIn(menus) {
    return menus.every((menu) => this.isIncluded(menu));
  }

  static getRandomCategory() {
    const categories = Object.keys(this.menu);
    const category = categories[Randoms.pickNumberInRange(1, 5) + 1];

    return category;
  }

  static pickCategoriesWithLimit(limit = 2, picks = 5) {
    const pickedCategories = {};
    const result = [];

    while (result.length < picks) {
      const category = this.getRandomCategory();
      pickedCategories[category] = (pickedCategories[category] || 0) + 1;

      if (pickedCategories[category] <= limit) {
        result.push(category);
      }
    }

    return result;
  }
}

module.exports = Menu;
