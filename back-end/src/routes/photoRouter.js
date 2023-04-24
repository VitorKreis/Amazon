import { Router } from 'express';
import PhotoController from '../controller/PhotoController';

const router = Router();

router.post('/', PhotoController.store);

export default router;
