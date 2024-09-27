import { AppLink, AppLogo, Container } from '~/shared/ui';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.row}>
                    <AppLogo />
                    <div className={styles.menu}>
                        <AppLink to="/#catalog" type={'white'}>
                            Catalog
                        </AppLink>
                        <AppLink to="/#faq" type={'white'}>
                            FAQ
                        </AppLink>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
