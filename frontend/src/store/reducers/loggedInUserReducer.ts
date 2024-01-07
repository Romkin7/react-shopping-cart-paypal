import ILoggedInUser from '../../@types/loggedInUser';
import LoggedInUserActionTypes, {
    RESET_LOGGED_IN_USER,
    SET_LOGGED_IN_USER,
} from '../actions/actionTypes/loggedInUserActionTypes';

const DEFAULT_STATE: ILoggedInUser = {
    isAuthenticated: false,
    isAdmin: false,
    isSuperAdmin: false,
    user: null,
};
const loggedInUserReducer = (
    state = DEFAULT_STATE,
    action: LoggedInUserActionTypes,
) => {
    switch (action.type) {
        case SET_LOGGED_IN_USER:
            return action.loggedInUser;
        case RESET_LOGGED_IN_USER:
            return DEFAULT_STATE;
        default:
            return state;
    }
};

export default loggedInUserReducer;
