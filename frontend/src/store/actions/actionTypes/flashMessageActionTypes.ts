import IFlashMessage from '../../../@types/flashMessage';

export const SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE';
export const RESET_FLASH_MESSAGE = 'RESET_FLASH_MESSAGE';

export interface SetFlashMessage {
    type: typeof SET_FLASH_MESSAGE;
    flashMessage: IFlashMessage;
}

export interface ResetFlashMessage {
    type: typeof RESET_FLASH_MESSAGE;
}

type FlashMessageActionTypes = SetFlashMessage | ResetFlashMessage;
export default FlashMessageActionTypes;
