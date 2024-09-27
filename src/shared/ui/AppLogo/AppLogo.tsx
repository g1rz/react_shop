import { Link } from 'react-router-dom';
import styles from './AppLogo.module.scss';

export function AppLogo() {
    return (
        <Link to="/" className={styles.logo}>
            Goods4you
        </Link>
    );
}
