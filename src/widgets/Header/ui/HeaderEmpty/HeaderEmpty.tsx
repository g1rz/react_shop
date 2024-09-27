import { AppLogo, Container } from '~/shared/ui/';

import styles from './HeaderEmpty.module.scss';

export function HeaderEmpty() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.row}>
                    <AppLogo />
                </div>
            </Container>
        </header>
    );
}
