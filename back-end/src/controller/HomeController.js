class Home {
  async home(req, res) {
    res.json({
      produto: 'Iphone 12 plux',
      foto: ';)',
      preço: 5.750,
    });
  }
}

export default new Home();
