import { FC, PropsWithChildren } from 'react';
import './Icon.scss';
import clsx from 'clsx';

export type IconSize = 'sm' | 'md' | 'lg';

export interface IIconProps {
    size: IconSize;
    ariaLabel: string;
    color?: 'light' | 'dark' | 'inherit';
}

export type IconProps = PropsWithChildren<IIconProps>;

const Icon: FC<IconProps> = ({ children, size, ariaLabel, color }) => {
    const iconStyles = clsx({
        ['icon']: true,
        [`icon--${size}`]: true,
        [`icon--${color}`]: !!color,
    });
    return (
        <span className={iconStyles} aria-label={ariaLabel}>
            {children}
        </span>
    );
};

export default Icon;
