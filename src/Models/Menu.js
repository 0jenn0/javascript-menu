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
      const number = Random.pickNumberInRange(0, 4);
      counts[number] = (counts[number] || 0) + 1;

      if (counts[number] <= 2) {
        result.push(number);
      }
    }

    return result;
  }

  static pickRandomCategories() {
    return Menu.pickRandomIndexes().map((index) => Menu.getCategories()[index]);
  }
}
