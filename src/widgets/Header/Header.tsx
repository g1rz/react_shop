import { Container } from '~/shared/ui/Container/Container';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <p>test</p>
            </Container>
        </header>
    );
}
