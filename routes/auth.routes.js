import { Router} from 'express';
import { loginUser, registerUser, logoutUser, updateUser } from '../controller/auth.controller.js';
const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/update').put(updateUser);

export default router;