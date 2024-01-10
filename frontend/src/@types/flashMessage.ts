export type FlashMessageVariant = 'success' | 'warning' | 'danger' | 'info';

interface IFlashMessage {
    variant: FlashMessageVariant;
    text: string;
    isVisible: boolean;
}

export default IFlashMessage;
