class HomeController {
  async index(req, res) {
    console.log(req.session.user);
    res.send('Hello World!');
  }
}

export default new HomeController();
