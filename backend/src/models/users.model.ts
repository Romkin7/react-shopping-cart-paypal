import { Schema, model, CallbackWithoutResultAndOptionalError } from 'mongoose';
import ErrorMessages from '../errors/errorMessages';
import { genSalt, hash } from 'bcrypt';

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
    function (this, next: CallbackWithoutResultAndOptionalError) {
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

const User = model('User', UserSchema);

export default User;
