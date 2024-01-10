import IFlashMessage from '../../@types/flashMessage';
import FlashMessageActionTypes, {
    RESET_FLASH_MESSAGE,
    SET_FLASH_MESSAGE,
} from '../actions/actionTypes/flashMessageActionTypes';

const DEFAULT_STATE: IFlashMessage = {
    text: '',
    variant: 'success',
    isVisible: false,
};
const flashMessageReducer = (
    state = DEFAULT_STATE,
    action: FlashMessageActionTypes,
) => {
    switch (action.type) {
        case SET_FLASH_MESSAGE:
            return action.flashMessage;
        case RESET_FLASH_MESSAGE:
            return DEFAULT_STATE;
        default:
            return state;
    }
};

export default flashMessageReducer;
