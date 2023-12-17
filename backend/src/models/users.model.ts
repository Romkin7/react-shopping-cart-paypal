import {
    Schema,
    model,
    CallbackWithoutResultAndOptionalError,
    Document,
    ObjectId,
} from 'mongoose';
import ErrorMessages from '../errors/errorMessages';
import { compareSync, genSalt, hash } from 'bcrypt';

interface UserDocument extends Document {
    email: string;
    password: string;
    roles: ObjectId[];
    history: string[];
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

/** Set indexes */
UserSchema.index({ email: 1 }, { unique: true });
const User = model<UserDocument>('User', UserSchema);

export default User;
