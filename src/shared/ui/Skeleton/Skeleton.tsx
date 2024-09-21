import { CSSProperties } from 'react';

import styles from './Skeleton.module.scss';

type Props = {
    width?: CSSProperties['width'];
    height: CSSProperties['height'];
};

export function Skeleton({ width = '100%', height }: Props) {
    return (
        <div
            className={styles.skeleton}
            style={{ width: width, height: height }}
        ></div>
    );
}
