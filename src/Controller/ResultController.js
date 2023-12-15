import { OutputView } from '../View/index.js';

export default class ResultController {
  static announceResult(categories, recommandResult) {
    OutputView.printRecommendation();
    OutputView.printWeekdays();
    OutputView.printCategories(categories);
    OutputView.printRecommendMenus(recommandResult);
    OutputView.printEndMessage();
  }
}
