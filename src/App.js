import AppController from './Controller/AppController.js';

class App {
  async play() {
    const appController = new AppController();
    await appController.start();
  }
}

export default App;
