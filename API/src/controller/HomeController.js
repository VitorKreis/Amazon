class HomeController {
  async index(req, res) {
    res.send('Hello World!');
  }
}

export default new HomeController();
