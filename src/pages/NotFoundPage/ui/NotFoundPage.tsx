import { Button, Container, Text } from '~/shared/ui';
import styles from './NotFoundPage.module.scss';

export function NotFoundPage() {
    return (
        <div className={styles.page}>
            <Container>
                <div className={styles.inner}>
                    <Text
                        className={styles.title}
                        as="h1"
                        weight="bold"
                        size="3xl"
                    >
                        404 Page not found
                    </Text>
                    <img
                        src="/src/pages/NotFoundPage/assets/travolta.gif"
                        alt="page 404"
                    />
                    <Button to="/">Back to main</Button>
                </div>
            </Container>
        </div>
    );
}
