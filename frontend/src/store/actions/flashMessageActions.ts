import IFlashMessage from '../../@types/flashMessage';
import AppActions from './actionTypes/actions';
import {
    RESET_FLASH_MESSAGE,
    SET_FLASH_MESSAGE,
} from './actionTypes/flashMessageActionTypes';

export function setFlashMessage(flashMessage: IFlashMessage): AppActions {
    return {
        type: SET_FLASH_MESSAGE,
        flashMessage,
    };
}

export function resetFlashMessage(): AppActions {
    return {
        type: RESET_FLASH_MESSAGE,
    };
}
