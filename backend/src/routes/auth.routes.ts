import { Router, Request, Response } from 'express';
import User from '../models/users.model';
import Role from '../models/roles.model';
import { ObjectId } from 'mongoose';
import ErrorMessages from '../errors/errorMessages';

const router = Router();

router.post('/auth/signup', async (req: Request, res: Response) => {
    try {
        const role = await Role.findOne({ type: 'basic' });
        const user = new User();
        user.email = req.body.email;
        user.password = req.body.password;
        user.roles.push(role._id as unknown as ObjectId);
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

router.post('/auth/login', async (req: Request, res: Response) => {
    try {
        // Tries to find the user matching the given username
        const user = await User.findOne({ email: request.body.email });
        if (!user) {
            return response
                .status(401)
                .json({ message: errorMessages.wrongUsernameOrPassword });
            // Check if the password is valid
        } else if (user && user.comparePasswords(request.body.password)) {
            const uiUser = user.getExportableUser();
            const refreshToken = user.generateRefreshToken();
            const accessToken = user.generateAccessToken();
            const foundRefreshToken = await Token.findOne({
                tokenId: `refreshToken-${mongoDBIdToString(user._id)}`,
            });
            if (!foundRefreshToken) {
                const newRefreshToken = new Token();
                newRefreshToken.tokenId = `refreshToken-${mongoDBIdToString(
                    user._id,
                )}`;
                newRefreshToken.token = refreshToken;
                await newRefreshToken.save();
            } else {
                foundRefreshToken.token = refreshToken;
                await foundRefreshToken.save();
            }
            const loggedInUser: ILoggedInUser = {
                user: uiUser,
                isAdmin: user.role === 'admin' ? true : false,
                isAuthenticated: true,
            };
            return response.status(200).json({ loggedInUser, accessToken });
        } else {
            // Throws an error if credentials are not valid
            return response
                .status(401)
                .json({ message: errorMessages.wrongUsernameOrPassword });
        }
    } catch (error) {
        log(error);
        return response
            .status(500)
            .json({ message: errorMessages.serverError });
    }
});

export default router;
