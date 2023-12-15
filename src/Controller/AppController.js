import Menu from '../Models/Menu.js';
import { OutputView } from '../View/index.js';
import ResultController from './ResultController.js';
import SetupController from './SetupController.js';

export default class AppController {
  static async start() {
    OutputView.printStartMessage();

    const coachNames = await SetupController.setupCoachNames();

    const coachesWithRestrictedMenus = await SetupController.setupRestrictedMenus(coachNames);

    const categories = Menu.pickRandomCategories();

    const recommandResult = Menu.recommendMenus(coachesWithRestrictedMenus, categories);

    ResultController.announceResult(categories, recommandResult);
  }
}
