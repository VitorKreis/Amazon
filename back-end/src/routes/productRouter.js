import { Router } from 'express';
import ProductController from '../controller/ProductController';

const router = Router();

router.get('/', ProductController.index);

router.get('/:id', ProductController.show);

router.post('/', ProductController.store);

router.put('/:id', ProductController.update);

router.delete('/:id', ProductController.delete);

export default router;
