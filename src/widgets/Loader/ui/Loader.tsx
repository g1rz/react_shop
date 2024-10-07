import { Spinner } from '~/shared/ui';
import styles from './Loader.module.scss';

export function Loader() {
    return (
        <div className={styles.loader}>
            <Spinner />
        </div>
    );
}
