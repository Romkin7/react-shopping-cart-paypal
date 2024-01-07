import ILoggedInUser from '../../@types/loggedInUser';
import AppActions from './actionTypes/actions';
import {
    RESET_LOGGED_IN_USER,
    SET_LOGGED_IN_USER,
} from './actionTypes/loggedInUserActionTypes';

export function setLoggedInUser(loggedInUser: ILoggedInUser): AppActions {
    return {
        type: SET_LOGGED_IN_USER,
        loggedInUser,
    };
}

export function resetLoggedInUser(): AppActions {
    return {
        type: RESET_LOGGED_IN_USER,
    };
}
