import { Router } from 'express';
import { getSubTaskAsync, getSubTaskByIdAsync, createSubTaskAsync, updateSubTaskAsync, deleteSubTaskByIdAsync } from '../controllers/subTaskController';

const router = Router();

router.get('/', getSubTaskAsync);
router.get('/:id', getSubTaskByIdAsync);
router.post('/', createSubTaskAsync);
router.put('/:id', updateSubTaskAsync);
router.delete('/:id', deleteSubTaskByIdAsync);

export default router;