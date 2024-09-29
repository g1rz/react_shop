import { Helmet } from 'react-helmet-async';
import { Container, Text } from '~/shared/ui';

import styles from './LoginPage.module.scss';
import { LoginForm } from '~/features/auth';

export function LoginPage() {
    return (
        <>
            <Helmet>
                <title>Sign in | Goods4you</title>
            </Helmet>
            <div className={styles.page}>
                <Container>
                    <Text
                        as="h1"
                        size="3xl"
                        weight="bold"
                        align="center"
                        className={styles.title}
                    >
                        Sign in
                    </Text>
                    <LoginForm />
                </Container>
            </div>
        </>
    );
}
