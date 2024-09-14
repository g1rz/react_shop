import { Button, Container, Text } from '~/shared/ui';

import styles from './Hero.module.scss';

type Props = {
    title: string;
    text?: string;
    btnText?: string;
    btnLink?: string;
    background?: string;
};

export function Hero({ title, text, btnText, btnLink, background }: Props) {
    return (
        <div className={styles.hero}>
            {background && (
                <div className={styles.background}>{background}</div>
            )}
            <Container>
                <div className={styles.inner}>
                    {title && (
                        <Text as={'h1'} size={'3xl'} className={styles.title}>
                            {title}
                        </Text>
                    )}

                    {text && (
                        <Text
                            size={'m'}
                            weight={'semibild'}
                            className={styles.text}
                        >
                            {text}
                        </Text>
                    )}

                    {btnText && <Button to={btnLink}>{btnText}</Button>}
                </div>
            </Container>
        </div>
    );
}
