export default class MenuRecommander {
  #menu = MENU;

  getCategoryByMenu(menu) {
    return Object.keys(this.#menu).find((category) => this.#menu[category].includes(menu));
  }

  recommandMenu(coachNames,) {
    const menus = this.#menu;
    const recommandedMenus = {};

    coachNames.forEach((coachName) => {
      const recommandedMenu = this.#getRandomMenu(menus, restrictedMenus);
      const category = this.getCategoryByMenu(recommandedMenu);

      if (!recommandedMenus[coachName]) {
        recommandedMenus[coachName] = {};
      }

      if (!recommandedMenus[coachName][category]) {
        recommandedMenus[coachName][category] = [];
      }

      recommandedMenus[coachName][category].push(recommandedMenu);
    });

    return recommandedMenus;
  }
}
