import { ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
    children?: ReactNode;
};

export function Container(props: ContainerProps) {
    return <div className={styles.container}>{props.children}</div>;
}
