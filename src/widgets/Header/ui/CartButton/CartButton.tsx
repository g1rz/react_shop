import { ReactNode } from 'react';
import { AppLink } from '~/shared/ui';

import styles from './CartButton.module.scss';

type Props = {
    children: ReactNode;
    to: string;
};

export default function CartButton({ children, to }: Props) {
    return (
        <AppLink to={to} type={'white'} className={styles.cart}>
            {children}
        </AppLink>
    );
}
