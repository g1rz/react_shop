import clsx from 'clsx';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

type Props = {
    to?: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onlyIcon?: boolean;
};

export function Button({
    to,
    children,
    className,
    onClick,
    type = 'button',
    disabled,
    onlyIcon,
    ...props
}: Props) {
    const addClass = clsx([
        styles.button,
        onlyIcon && styles.onlyIcon,
        className,
    ]);

    if (to) {
        return (
            <Link to={to} className={addClass} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={addClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
