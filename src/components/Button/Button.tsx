import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import './Button.scss';
type ButtonTypes = 'button' | 'submit' | 'reset';
type ButtonSizes = 's' | 'm';
type ButtonVariants = 'primary' | 'success' | 'warning' | 'danger' | 'disabled';

interface IButtonProps {
    type: ButtonTypes;
    size: ButtonSizes;
    variant: ButtonVariants;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

type ButtonProps = PropsWithChildren<IButtonProps>;

const Button: FC<ButtonProps> = ({ type, children, size, variant, onClick }) => {
    const buttonStyles = clsx({
        ['button']: true,
        [`button--${size}`]: true,
        [`button--${variant}`]: true,
    });
    return (
        <div>
            <button className={buttonStyles} type={type} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;
