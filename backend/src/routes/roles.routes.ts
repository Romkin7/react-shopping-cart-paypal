import { Router, Request, Response } from 'express';
import Role from '../models/roles.model';
import ErrorMessages from '../errors/errorMessages';

const router = Router();

router.post('/roles', async (req: Request, res: Response) => {
    try {
        const role = new Role();
        role.type = req.body.type;
        const newRole = await role.save();
        return res.status(201).json({
            message: 'New role was successfully created!',
            role: newRole,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: ErrorMessages.serverError,
            error: JSON.stringify(error),
        });
    }
});

export default router;
