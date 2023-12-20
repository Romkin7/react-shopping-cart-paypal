import {
    Schema,
    model,
    CallbackWithoutResultAndOptionalError,
    Document,
    ObjectId,
} from 'mongoose';
import ErrorMessages from '../errors/errorMessages';
import { compareSync, genSalt, hash } from 'bcrypt';
import IUser, { IBaseLoggedInUser } from '../@types/user';
import { sign } from 'jsonwebtoken';
import mongoDBIdToString from '../utils/mongoDBIdToString';
import { setAccessTokenExpiry, setRefreshTokenExpiry } from '../utils/auth';

export interface UserDocument extends Document {
    email: string;
    password: string;
    roles: ObjectId[];
    history: string[];
    getExportableUser: () => IBaseLoggedInUser;
    comparePasswords: (password: string) => boolean;
    generateRefreshToken: () => string;
    generateAccessToken: () => string;
}

const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
        history: [{ type: String }],
    },
    { timestamps: true },
);

UserSchema.methods.getExportableUser = function (
    this: UserDocument,
): Document<UserDocument> {
    const user: UserDocument = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.keywords;
    return userObject;
};

UserSchema.methods.generateAccessToken = function (this: UserDocument): string {
    const user = this;
    const expires = setAccessTokenExpiry();
    const token = sign(
        { _id: mongoDBIdToString(user._id), user: user.getExportableUser() },
        process.env.JWT_TOKEN_SECRET,
        { expiresIn: expires },
    );
    return token;
};
UserSchema.methods.generateRefreshToken = function (this: IUser): string {
    const user = this;
    const expiry = setRefreshTokenExpiry();
    const refreshToken = sign(
        { _id: mongoDBIdToString(user._id), user: user },
        process.env.JWT_REFRESH_TOKEN_SECRET,
        {
            expiresIn: expiry,
        },
    );
    return refreshToken;
};
/**
 * Defines method, that compares candidate password with user password,
 * that is stored in the database.
 * */
UserSchema.methods.comparePasswords = function (
    this: UserDocument,
    password: string,
) {
    return compareSync(password, this.password);
};

UserSchema.pre(
    'save',
    function (this: UserDocument, next: CallbackWithoutResultAndOptionalError) {
        const user = this;
        // Check if user hasn't modified password, return next.
        if (!user.isModified('password')) return next();
        genSalt(10, function (error: Error, salt: string) {
            if (error) {
                console.log(error);
                throw new Error(ErrorMessages.serverError);
            }
            hash(user.password, salt, function (error: Error, hash: string) {
                if (error) {
                    console.log(error);
                    throw new Error(ErrorMessages.serverError);
                }
                user.password = hash;
                next();
            });
        });
    },
);

/** Set indexes */
UserSchema.index({ email: 1 }, { unique: true });
const User = model<UserDocument>('User', UserSchema);

export default User;
