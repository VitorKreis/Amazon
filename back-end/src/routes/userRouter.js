import Router from 'express';
import User from '../controller/UserController';
import userRequired from '../middleware/userRequired';

const router = Router();

router.get('/', User.index);

router.get('/', User.show);

router.post('/', User.store);

router.put('/', userRequired, User.update);

router.delete('/', userRequired, User.delete);

export default router;
