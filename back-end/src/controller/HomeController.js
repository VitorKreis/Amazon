import ProductModel from '../models/Product.js';

class Home {
  async home(req, res) {
    try {
      const Product = ProductModel;
      // Puxando os produtos
      const product = await Product.find();

      res.json(product);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Home();
