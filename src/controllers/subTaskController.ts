import { Request, Response } from 'express'
import SubTask from '../models/subTaskModel';

export async function getSubTaskAsync(_: Request, res: Response) {
    try {
        const subTasks = await SubTask.findAll();
        return res.json(subTasks);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch SubTasks.' })
    }
}

export async function getSubTaskByIdAsync(req: Request, res: Response) {
    try {
        const subTask = await SubTask.findByPk(req.params.id);
        if (subTask) {
            return res.json(subTask);
        } else {
            return res.status(404).json({ message: 'SubTask not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch SubTasks.' })
    }
}

export async function createSubTaskAsync(req: Request, res: Response) {
    try {
        const subTask = await SubTask.create(req.body);
        return res.status(201).json(subTask);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create SubTask.' })
    }
}

export async function updateSubTaskAsync(req: Request, res: Response) {
    try {
        const [affectedRows] = await SubTask.update(req.body, {
            where: {
                Id: req.params.id
            }
        });

        if (affectedRows === 0) {
            res.status(404).json({ message: 'SubTask not found.' });
        } else {
            res.status(204).json();
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update SubTask.' })
    }
}

export async function deleteSubTaskByIdAsync(req: Request, res: Response) {
    try {
        const affectedRows = await SubTask.destroy({ where: { Id: req.params.id } });
        if (affectedRows === 0) {
            res.status(404).json({ message: 'SubTask not found.' });
        } else {
            res.status(204).json();
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete Todo.' });
    }
}