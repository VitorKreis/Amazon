import { Router } from 'express';
import LoginController from '../controller/LoginController'

const router = Router();

router.get('/', LoginController.login);

export default router;
