import { Container, Text } from '~/shared/ui';
import styles from './FAQ.module.scss';
import FAQItem from '~/features/FAQItem/ui/FAQItem';

const mockFAQs = [
    {
        question: 'How can I track the status of my order?',
        answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
        isOpen: true,
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
        isOpen: false,
    },
    {
        question: 'How can I return or exchange an item?',
        answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
        isOpen: false,
    },
];

export function FAQ() {
    return (
        <section className={styles.faq} id="#faq">
            <Container width={'min'}>
                <Text
                    as={'h2'}
                    size={'3xl'}
                    weight={'bold'}
                    className={styles.title}
                >
                    FAQ
                </Text>
                <div className={styles.list}>
                    {mockFAQs.map(({ question, answer, isOpen }, index) => (
                        <FAQItem
                            key={index}
                            question={question}
                            answer={answer}
                            isOpen={isOpen}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
