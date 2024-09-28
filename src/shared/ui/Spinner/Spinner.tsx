import styles from './Spinner.module.scss';

export type SpinnerProps = {
    width?: number;
    height?: number;
};

export function Spinner({ width = 50, height = 50 }: SpinnerProps) {
    return (
        <div
            className={styles.spinner}
            style={{ width: `${width}px`, height: `${height}px` }}
        ></div>
    );
}
