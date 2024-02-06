import { Request, Response } from 'express'

import Todo from '../models/todoModel';

export async function getTodosAsync(_: Request, res: Response) {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch Todos.' });
    }
}

export async function getTodoByIdAsync(req: Request, res: Response) {
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
}

export async function createTodoAsync(req: Request, res: Response) {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create Todo.' });
    }
}

export async function updateTodoAsync(req: Request, res: Response) {
    try {
        const [affectedRows] = await Todo.update(req.body, {
            where: {
                Id: req.params.id
            }
        });

        if (affectedRows === 0) {
            res.status(404).json({ message: 'Todo not found.' });
        } else {
            res.status(204).json();
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update todo.' });
    }
}

export async function deleteTodoByIdAsync(req: Request, res: Response) {
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
}