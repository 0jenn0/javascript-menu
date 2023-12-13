import CoachNameValidator from "../Validator/CoachNameValidator";
import Menu from "./Menu";

export default class Coach {
  #name;

  #restrictedMenus;

  constructor(name, restrictedMenus) {
    CoachNameValidator.check(name);
    this.#name = name;

    Menu.isIncludedIn(restrictedMenus);
    this.#restrictedMenus = restrictedMenus;
  }
}
