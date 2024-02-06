import { Router } from 'express';
import todoRoutes from './todoRoutes';
import subTasksRoutes from './subTasksRoutes';

const router = Router();
router.use('/api/todos', todoRoutes);
router.use('/api/subTasks', subTasksRoutes);

export default router;