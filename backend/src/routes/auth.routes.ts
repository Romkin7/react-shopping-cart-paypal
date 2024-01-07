import { Router, Request, Response } from 'express';
import User, { UserDocument } from '../models/users.model';
import Role from '../models/roles.model';
import Token from '../models/tokens.model';
import { ObjectId } from 'mongoose';
import mongoDBIdToString from '../utils/mongoDBIdToString';
import ErrorMessages from '../messages/errorMessages';
import errorMessages from '../messages/errorMessages';
import successMessages from '../messages/successMessages';

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
        console.log(req.body);
        // Tries to find the user matching the given username
        const user = (await User.findOne({
            email: req.body.email,
        }).populate('roles')) as UserDocument;
        if (!user) {
            return res
                .status(401)
                .json({ message: ErrorMessages.wrongEmailOrPassword });
            // Check if the password is valid
        } else if (user && user.comparePasswords(req.body.password)) {
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

            return res.status(200).json({
                message: 'You are now logged in successfully',
                accessToken,
            });
        } else {
            // Throws an error if credentials are not valid
            return res
                .status(401)
                .json({ message: ErrorMessages.wrongEmailOrPassword });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: ErrorMessages.serverError });
    }
});

router.delete(
    '/auth/:id/logout',
    async (request: Request, response: Response) => {
        try {
            if (!request.params.id) {
                return response
                    .status(400)
                    .json({ message: errorMessages.invalidUserId });
            }
            await Token.deleteOne({
                tokenId: `refreshToken-${request.params.id}`,
            });
            return response
                .status(200)
                .json({ message: successMessages.loggedOutMessage });
        } catch (error) {
            return response
                .status(500)
                .json({ message: errorMessages.serverError });
        }
    },
);

export default router;
