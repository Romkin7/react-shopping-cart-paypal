import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import './Icon.scss';

export type IconSize = 'sm' | 'md' | 'lg';

export interface IIconProps {
    /**
     * Sets icons size
     * IconSize = 'sm' | 'md' | 'lg';
     */
    size: IconSize;
    /**
     * Sets icons aria-label
     * AriaLabel = "Icon";
     */
    ariaLabel: string;
    /**
     * Sets icons color
     * Color = 'light' | 'dark';
     */
    color?: 'light' | 'dark' | 'inherit';
}

export type IconProps = PropsWithChildren<IIconProps>;

const Icon: FC<IconProps> = ({ children, size, color, ariaLabel }) => {
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
