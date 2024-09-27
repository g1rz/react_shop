import { ReactNode } from 'react';
import styles from './Container.module.scss';
import { clsx } from 'clsx';

type ContainerProps = {
    children?: ReactNode;
    width?: 'min' | 'regular';
};

export function Container({ children, width = 'regular' }: ContainerProps) {
    return (
        <div className={clsx([styles.container, styles[width]])}>
            {children}
        </div>
    );
}
