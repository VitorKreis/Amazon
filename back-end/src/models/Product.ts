import { Schema, model } from 'mongoose';

interface Schemaproduct {
    name: string,
    description: string,
    price: number
}

const ProductSchema = new Schema<Schemaproduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const ProductModel = model('Product', ProductSchema);

export default ProductModel;
