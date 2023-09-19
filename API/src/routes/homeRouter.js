import { Router } from 'express';
import HomeController from '../controller/HomeController';

const router = Router();

router.get('/', HomeController.index);

export default router;
