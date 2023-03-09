import { Router } from 'express';

import HomeController from '../controller/HomeController.js';

const router = new Router();

router.get('/', HomeController.home);

export default router;
