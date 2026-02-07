import { Router} from 'express';
import { loginUser, registerUser, logoutUser, updateUser, getUsers } from '../controller/auth.controller.js';
const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/get').get(getUsers);
router.route('/logout').post(logoutUser);
router.route('/update/:id').put(updateUser);

export default router;