import { Schema, model } from 'mongoose';

const RoleSchema = new Schema(
    {
        /**
         * User Roles: basic, admin, superAdmin
         * */
        type: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
    },
);

const Role = model('Role', RoleSchema);

export default Role;
