import { Router } from 'express';
import product from '../controller/productController';

const router = Router();

router.post('/', product.store);

router.get('/', product.index);

export default router;
