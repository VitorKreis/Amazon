import Router from 'express'
import User from '../controller/UserController'

const router = Router();

router.get('/', User.index);

router.get('/:id', User.show);


router.post('/', User.store);

router.put('/:id', User.update);

router.delete('/:id', User.delete);

export default router;
