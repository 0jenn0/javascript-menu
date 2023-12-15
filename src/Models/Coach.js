export default class Coach {
  #name;

  #restrictedMenus;

  constructor(name, restrictedMenus) {
    this.#name = name;
    this.#restrictedMenus = restrictedMenus;
  }

  getName() {
    return this.#name;
  }

  getRestrictedMenus() {
    return this.#restrictedMenus;
  }
}
