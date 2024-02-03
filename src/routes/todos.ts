import { Router } from 'express';
import { getTodosAsync, createTodoAsync, getTodoByIdAsync, updateTodoAsync, deleteTodoByIdAsync } from '../controllers/todos';

const router = Router();

// Create a new Todo
router.post('/', createTodoAsync);

// Get all Todos
router.get('/', getTodosAsync);

// Get Todo by ID
router.get('/:id', getTodoByIdAsync);

// Update todo by ID
router.put('/:id', updateTodoAsync);

// Delete Todo by ID
router.delete('/:id', deleteTodoByIdAsync);

export default router;