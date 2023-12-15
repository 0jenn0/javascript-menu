import MENU from '../Constants/Menu.js';
import { Random } from '@woowacourse/mission-utils';

export default class Menu {
  static #menu = MENU;

  static checkExistMenu(menu) {
    return Object.values(Menu.#menu).flat().includes(menu);
  }

  static getCategories() {
    return Object.keys(Menu.#menu);
  }

  static pickRandomCategory() {
    const categories = Menu.getCategories();
    const randomIndex = categories[Random.pickNumberInRange(0, 4)];

    return categories[randomIndex];
  }

  static pickRandomIndexes() {
    const counts = {};
    const result = [];

    while (result.length < 5) {
      const number = Random.pickNumberInRange(1, 5);
      counts[number] = (counts[number] || 0) + 1;

      if (counts[number] <= 2) {
        result.push(number);
      }
    }

    return result;
  }

  static pickRandomCategories() {
    return Menu.pickRandomIndexes().map((index) => Menu.getCategories()[index - 1]);
  }

  static getRandomMenu(category) {
    const menuNums = Menu.#menu[category].length;
    const array = Array.from({ length: menuNums }, (_, index) => index + 1);
    const randomMenuIndex = Random.shuffle(array)[0];

    return Menu.#menu[category][randomMenuIndex - 1];
  }

  static recommendMenu(categories, restrictedMenus) {
    return categories.map((category) =>
      Menu.getRecommendedMenuForCategory(category, restrictedMenus),
    );
  }

  static getRecommendedMenuForCategory(category, restrictedMenus) {
    const MAX_ATTEMPTS = 10;
    let attempts = 0;

    while (attempts < MAX_ATTEMPTS) {
      const recommendedMenu = Menu.getRandomMenu(category);
      if (!restrictedMenus.includes(recommendedMenu)) {
        return recommendedMenu;
      }
      attempts++;
    }
  }

  static recommendMenus(coachesWithRestrictedMenus, categories) {
    const recommandResult = [];
    coachesWithRestrictedMenus.forEach(({ name, restrictedMenus }) => {
      const recommandedMenus = Menu.recommendMenu(categories, restrictedMenus);
      recommandResult.push({ name, recommandedMenus });
    });
    return recommandResult;
  }
}
