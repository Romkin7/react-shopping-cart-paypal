import CartActionTypes from './cartActionTypes';
import LoggedInUserActionTypes from './loggedInUserActionTypes';
import ProductActionTypes from './productActionTypes';

type AppActions =
    | CartActionTypes
    | ProductActionTypes
    | LoggedInUserActionTypes;

export default AppActions;
