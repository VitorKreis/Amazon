import Product from '../models/Product';
import Picture from '../models/Picture';

class ProductController {
  async index(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ['id', 'name', 'description', 'price'],
        include: {
          model: Picture,
          attributes: ['id', 'originalname'],
        },
      });
      return res.json(products);
    } catch (e) {
      return res.status(404).json({
        error: e.message,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json('id invalid');
      }
      const products = await Product.findByPk(id, {
        attributes: ['id', 'name', 'description', 'price'],
        include: {
          model: Picture,
          attributes: ['id', 'originalname'],
        },
      });
      if (!products) {
        return res.status(404).json('Product does not exist');
      }

      return res.json({ products });
    } catch (e) {
      return res.status(404).json({
        error: e.message,
      });
    }
  }

  async store(req, res) {
    try {
      const Newproduct = await Product.create(req.body);
      return res.status(200).json(Newproduct);
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json('Product does not exist');
      }
      const UpdateProduct = await product.update(req.body);
      return res.status(200).json(UpdateProduct);
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json('Product does not exist');
      }
      const DeletedProd = await product.destroy();
      return res.status(200).json(DeletedProd);
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  }
}

export default new ProductController();
