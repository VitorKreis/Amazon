import ProductModel from '../models/Product.js';

class Product {
  async index(req, res) {
    try {
      const Products = await ProductModel.find({});

      res.json({ Products });
    } catch (error) {
      console.log(error);
    }
  }

  /* async show(req, res) {
    try {
      const Products = await ProductModel.findById({ _id: 10 });

      res.json({ Products });
    } catch (error) {
      console.log(error);
    }
  } */

  async create(req, res) {
    try {
      console.log(req.body);
      const newProduct = await ProductModel.create(req.body);
      newProduct.save();

      res.json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Product();
