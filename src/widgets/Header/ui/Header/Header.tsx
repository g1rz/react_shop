import { AppLink, AppLogo, Container } from '~/shared/ui/';

import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.row}>
                    <AppLogo />
                    <nav className={styles.menu}>
                        <AppLink to="#catalog" type={'white'}>
                            Catalog
                        </AppLink>
                        <AppLink to="#catalog" type={'white'}>
                            FAQ
                        </AppLink>
                        <AppLink to="#catalog" type={'white'}>
                            Cart
                        </AppLink>
                        <AppLink to="#catalog" type={'white'}>
                            Johnson Smith
                        </AppLink>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
