import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppLink.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

type LinkTypes = 'white' | 'gray' | 'currentColor';

type AppLinkProps = {
    to?: string;
    children: ReactNode;
    className?: string;
    type?: LinkTypes;
    onClick?: () => void;
    disabled?: boolean;
};

export function AppLink(props: AppLinkProps) {
    const {
        to,
        children,
        className,
        type = 'gray',
        onClick,
        disabled = false,
    } = props;

    if (to) {
        return (
            <Link
                to={to}
                className={clsx([styles.link, className, styles[type]])}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={clsx([styles.link, styles.btn, className, styles[type]])}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
