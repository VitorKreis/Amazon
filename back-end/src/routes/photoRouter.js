import { Router } from 'express';
import PictureController from '../controller/PictureController';

const router = Router();

router.post('/', PictureController.store);

export default router;
