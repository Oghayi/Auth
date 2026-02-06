import { Router } from 'express'
import { createTask, getTasks, updateTask, deleteTask } from '../controller/task.controller.js';

const router = Router();

router.route('/create').post(createTask);
router.route('/getTasks').get(getTasks);
router.route('/update/:id').put(updateTask);
router.route('/delete/:id').delete(deleteTask);

export default router;