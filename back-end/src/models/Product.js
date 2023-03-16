import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  price: {
    type: Number, required: true, min: 10, max: 100000000000,
  },
  date: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model('Products', ProductSchema);

export default ProductModel;
