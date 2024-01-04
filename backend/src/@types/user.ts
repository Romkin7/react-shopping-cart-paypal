import { ObjectId } from 'mongoose';
import IRole from './role';

interface BaseUser {
    _id: ObjectId;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    history: string[];
}

export interface IBaseLoggedInUser extends BaseUser {
    roles: IRole[];
}

export interface ILoggedInUser {
    user: IBaseLoggedInUser;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    isAuthenticated: boolean;
}

interface IUser extends BaseUser {
    getExportableUser(): unknown;
    password: string;
    roles: ObjectId[];
}

export default IUser;
