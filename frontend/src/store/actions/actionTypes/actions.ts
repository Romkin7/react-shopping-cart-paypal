import CartActionTypes from './cartActionTypes';
import FlashMessageActionTypes from './flashMessageActionTypes';
import LoggedInUserActionTypes from './loggedInUserActionTypes';
import ProductActionTypes from './productActionTypes';

type AppActions =
    | CartActionTypes
    | FlashMessageActionTypes
    | ProductActionTypes
    | LoggedInUserActionTypes;

export default AppActions;
