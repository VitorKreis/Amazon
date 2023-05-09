import { Router } from 'express';
import ProductController from '../controller/ProductController';
import userRequired from '../middleware/userRequired';

const router = Router();

router.get('/', ProductController.index);

router.get('/:id', ProductController.show);

router.post('/', ProductController.store);

router.put('/:id', userRequired, ProductController.update);

router.delete('/:id', userRequired, ProductController.delete);

export default router;
