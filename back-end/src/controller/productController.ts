import Product from '../models/Product';

class ProductController {
  async index(req : unknown, res : any) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async store(req : any, res: any) {
    try {
      const product = await new Product(req.body);
      product.save();
      res.json(product);
    } catch (error: any) {
      console.log(error);
    }
  }
}

export default new ProductController();
