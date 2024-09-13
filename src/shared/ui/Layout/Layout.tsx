import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

type LayoutProps = {
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
};

export function Layout(props: LayoutProps) {
    return (
        <div className={styles.layout}>
            {props.headerSlot}
            <main className={styles.main}>
                <Outlet />
            </main>
            {props.footerSlot}
        </div>
    );
}
