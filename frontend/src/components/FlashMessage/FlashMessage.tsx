import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import './FlashMessage.scss';
import { FlashMessageVariant } from '../../@types/flashMessage';

interface IFlashMessageProps {
    variant: FlashMessageVariant;
}

type FlashMessageProps = PropsWithChildren<IFlashMessageProps>;

const FlashMessage: FC<FlashMessageProps> = ({ children, variant }) => {
    const flashMessageStyles = clsx({
        ['flashMessage']: true,
        ['alert']: true,
        [`alert-${variant}`]: true,
    });
    return (
        <div className={flashMessageStyles} role="alert">
            {children}
        </div>
    );
};

export default FlashMessage;
