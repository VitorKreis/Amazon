import { Router } from 'express';

import Product from '../controller/ProductController.js';

const router = new Router();

router.get('/', Product.index);
// router.get('/:id', Product.show)

router.post('/', Product.create);

export default router;
