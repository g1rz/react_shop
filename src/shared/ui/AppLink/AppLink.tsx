import { Link } from 'react-router-dom';

import styles from './AppLink.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

type LinkTypes = 'white' | 'gray';

type AppLinkProps = {
    to: string;
    children: ReactNode;
    className?: string;
    type?: LinkTypes;
};

export function AppLink(props: AppLinkProps) {
    const { to, children, className, type = 'gray' } = props;
    return (
        <Link to={to} className={clsx([styles.link, className, styles[type]])}>
            {children}
        </Link>
    );
}
