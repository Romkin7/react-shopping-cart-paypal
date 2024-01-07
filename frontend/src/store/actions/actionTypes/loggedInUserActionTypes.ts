import ILoggedInUser from '../../../@types/loggedInUser';

export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const RESET_LOGGED_IN_USER = 'RESET_LOGGED_IN_USER';

export interface SetLoggedInUser {
    type: typeof SET_LOGGED_IN_USER;
    loggedInUser: ILoggedInUser;
}

export interface ResetLoggedInUser {
    type: typeof RESET_LOGGED_IN_USER;
}

type LoggedInUserActionTypes = SetLoggedInUser | ResetLoggedInUser;
export default LoggedInUserActionTypes;
