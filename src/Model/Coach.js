const Menu = require("./Menu.js");
const { Random } = require("@woowacourse/mission-utils");

class Coach {
  #name;

  #restrictedMenus;

  constructor(name, restrictedMenus) {
    this.#name = name;
    this.#restrictedMenus = restrictedMenus;
  }

  //   recommendMenus(categories) {
  //     let recommendedMenus = [];

  //     categories.forEach((category) => {
  //       let categoryMenus = Menu.menu[category];

  //       while (recommendedMenus.length < 5) {
  //         const array = Array.from({ length: categoryMenus.length }, (_, i) => i);

  //         let aa = Random.shuffle(array);

  //         let randomIndex = aa[0];

  //         let menu = categoryMenus[randomIndex - 1];

  //         if (
  //           !recommendedMenus.includes(menu) &&
  //           !this.#restrictedMenus.includes(menu)
  //         ) {
  //           recommendedMenus.push(menu);
  //           break;
  //         }
  //       }
  //     });

  //     return recommendedMenus;
  //   }
  recommendMenus(categories) {
    return categories
      .map((category) => this.pickRandomMenu(category))
      .filter(Boolean);
  }

  pickRandomMenu(category) {
    const categoryMenus = Menu.menu[category];
    const shuffledIndexes = Random.shuffle(
      Array.from({ length: categoryMenus.length }, (_, i) => i)
    );

    for (const index of shuffledIndexes) {
      const menu = categoryMenus[index - 1];
      if (!this.#restrictedMenus.includes(menu)) {
        return menu;
      }
    }
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
