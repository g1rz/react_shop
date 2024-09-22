import { IconStar } from '~/shared/ui/Icons';

import styles from './Rating.module.scss';

type Props = {
    value: number;
    maxValue?: number;
};

export function Rating({ value, maxValue = 5 }: Props) {
    const stars = Array.from({ length: maxValue }, (_, index) => (
        <IconStar
            key={index}
            className={index < Math.round(value) ? styles.filled : styles.empty}
        />
    ));

    return <div className={styles.rating}>{stars}</div>;
}
