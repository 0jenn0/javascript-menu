import Menu from '../Models/Menu.js';
import { OutputView } from '../View/index.js';
import SetupController from './SetupController.js';

export default class AppController {
  async start() {
    OutputView.printStartMessage();

    const coachNames = await SetupController.setupCoachNames();

    const coachesWithRestrictedMenus = await SetupController.setupRestrictedMenus(coachNames);

    const categories = Menu.pickRandomCategories();

    const recommandResult = Menu.recommendMenus(coachesWithRestrictedMenus, categories);

    OutputView.printRecommendation();
    OutputView.printWeekdays();
    OutputView.printCategories(categories);
    OutputView.printRecommendMenus(recommandResult);
    OutputView.printEndMessage();
  }
}
