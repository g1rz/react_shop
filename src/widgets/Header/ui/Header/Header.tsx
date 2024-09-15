import { AppLink, AppLogo, Container } from '~/shared/ui/';

import styles from './Header.module.scss';
import { CartButton } from '../CartButton/CartButton';

export function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.row}>
                    <AppLogo />
                    <nav className={styles.menu}>
                        <AppLink to="/#catalog" type={'white'}>
                            Catalog
                        </AppLink>
                        <AppLink to="/#faq" type={'white'}>
                            FAQ
                        </AppLink>
                        <CartButton textButton="Cart" to="/cart" count={100} />
                        <AppLink to="/" type={'white'}>
                            Johnson Smith
                        </AppLink>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
