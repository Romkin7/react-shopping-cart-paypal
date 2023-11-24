import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import './Button.scss';

type BorderRadiuses = 'none' | 'rounded' | 'rounded-left' | 'rounded-right';
type ButtonTypes = 'button' | 'submit' | 'reset';
type ButtonSizes = 's' | 'm';
type ButtonVariants = 'primary' | 'success' | 'warning' | 'danger' | 'disabled';

interface IButtonProps {
    type: ButtonTypes;
    size: ButtonSizes;
    variant: ButtonVariants;
    borderRadius: BorderRadiuses;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

type ButtonProps = PropsWithChildren<IButtonProps>;

const Button: FC<ButtonProps> = ({
    type,
    children,
    size,
    variant,
    borderRadius,
    onClick,
}) => {
    const buttonStyles = clsx({
        ['button']: true,
        [`button--${size}`]: true,
        [`button--${variant}`]: true,
        [`button--${borderRadius}`]: true,
    });
    return (
        <button className={buttonStyles} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
