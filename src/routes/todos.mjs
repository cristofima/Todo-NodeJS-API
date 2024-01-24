import { Router } from 'express';
import Todo from '../models/todo.mjs';
const router = Router();

// Create a new Todo
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create Todo.' });
    }
});

// Get all Todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch Todos.' });
    }
});

// Get Todo by ID
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        if (!todo) {
            res.status(404).json({ message: 'Todo not found.' });
        } else {
            res.json(todo);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch Todo.' });
    }
});

// Update todo by ID
router.put('/:id', async (req, res) => {
    try {
        const [updatedRowsCount] = await Todo.update(req.body, {
            where: { Id: req.params.id }
        });

        if (updatedRowsCount === 0) {
            res.status(404).json({ message: 'Todo not found.' });
        } else {
            res.status(204).json();
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update todo.' });
    }
});

// Delete Todo by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedRowsCount = await Todo.destroy({ where: { Id: req.params.id } });
        if (deletedRowsCount === 0) {
            res.status(404).json({ message: 'Todo not found.' });
        } else {
            res.status(204).json();
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete Todo.' });
    }
});

export default router;