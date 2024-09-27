import { AppLink } from '~/shared/ui';

import styles from './CartButton.module.scss';
import { IconCart } from '~/shared/ui/Icons';

type Props = {
    textButton: string;
    to: string;
    count: number;
};

export function CartButton({ textButton, to, count }: Props) {
    const visibleCount = count >= 99 ? '99+' : '100';
    return (
        <AppLink to={to} type={'white'} className={styles.cart}>
            {textButton}
            <span className={styles.icon}>
                <IconCart />
                <span className={styles.count}>{visibleCount}</span>
            </span>
        </AppLink>
    );
}
