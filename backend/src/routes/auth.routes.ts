import { Router, Request, Response } from 'express';
import User from '../models/users.model';
import Role from '../models/roles.model';

const router = Router();

router.post('/auth/signup', async (req: Request, res: Response) => {
    try {
        const role = await Role.findOne({ type: 'basic' });
        const user = new User();
        user.email = req.body.email;
        user.password = req.body.password;
        user.roles.push(role._id);
        const newUser = await user.save();
        return res.status(201).json({
            user: newUser,
            message: `User with email ${newUser.email} was successfully created!`,
        });
    } catch (error) {
        console.error(error.trace);
        return res.status(500).json({ message: error.message });
    }
});

export default router;
