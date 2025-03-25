import express from 'express';

import {newTask,updateTask,getAllTasks,deleteTask} from '../controllers/taskController.js';

const router=express.Router();

router.route('/').get(getAllTasks).post(newTask);
router.route('/:id').put(updateTask).delete(deleteTask);

export default router;