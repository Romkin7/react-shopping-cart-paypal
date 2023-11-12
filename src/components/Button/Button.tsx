import React, { FC , PropsWithChildren} from 'react'
import clsx from 'clsx';

type ButtonTypes = 'button' | 'submit' | 'reset' ;
type ButtonSizes = 's' | 'm' ;
type ButtonVariants = 'primary' | 'success' | 'warning' | 'danger' | 'disabled'

interface IButtonProps {
    type: ButtonTypes;
    size: ButtonSizes;
    variant: ButtonVariants
}

type ButtonProps = PropsWithChildren<IButtonProps>;

const Button : FC<ButtonProps> = ({type,children,size,variant}) => {
    const buttonStyles = clsx({
        ['button']: true,
        [`button--${size}`]:true,
        [`button--${variant}`]: true
    })
  return (
    <div>
        <button className={buttonStyles} type={type}>{children}</button>
    </div>
  )
}

export default Button