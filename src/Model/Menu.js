const MENU = require("../Constant/Menu.js");
const { Random } = require("@woowacourse/mission-utils");

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
    const category = categories[Random.pickNumberInRange(1, 5) - 1];

    return category;
  }

  //   static pickRandomCategories() {
  //     let categories = [];
  //     while (categories.length < 5) {
  //       const number = Random.pickNumberInRange(1, 5);
  //       if (
  //         categories.filter((_, index) => categories[index] === number).length <=
  //         1
  //       ) {
  //         categories.push(Object.keys(Menu.menu)[number - 1]);
  //         continue;
  //       }
  //     }
  //     return categories;
  //   }
  static pickRandomCategories() {
    let categories = [];
    while (categories.length < 5) {
      const number = Random.pickNumberInRange(1, 5);
      const category = Object.keys(Menu.menu)[number - 1];

      // 해당 카테고리의 현재 중복 개수를 확인
      const duplicateCount = categories.filter((c) => c === category).length;

      // 중복 개수가 2 이하인 경우에만 추가
      if (duplicateCount < 2) {
        categories.push(category);
      }
    }
    return categories;
  }
}

module.exports = Menu;
