import IRole from './role';

interface BaseUser {
    _id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    history: string[];
}

export interface IBaseLoggedInUser extends BaseUser {
    roles: IRole[];
}

export interface ILoggedInUser {
    user: IBaseLoggedInUser | null;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    isAuthenticated: boolean;
}

export default ILoggedInUser;
