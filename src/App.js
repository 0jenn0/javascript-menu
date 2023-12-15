import AppController from './Controller/AppController.js';

class App {
  async play() {
    await AppController.start();
  }
}

export default App;
