import { Router } from 'express';
import HomeController from '../controller/HomeController';
import userRequired from '../middleware/userRequired';

const router = Router();

router.get('/', userRequired, HomeController.index);

export default router;
