import { Text } from '~/shared/ui';
import styles from './FAQItem.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { IconCross } from '~/shared/ui/Icons/';

export type Props = {
    question: string;
    answer: string;
    isOpen?: boolean;
};

export function FAQItem({ question, answer, isOpen }: Props) {
    const [isOpenState, setisOpenState] = useState(isOpen);

    return (
        <div className={clsx([styles.item, isOpenState && styles.isOpen])}>
            <div
                className={styles.question}
                onClick={() => setisOpenState((isOpen) => !isOpen)}
            >
                <Text className={styles.questionText} size={'xl'}>
                    {question}
                </Text>
                <IconCross size={'xl'} className={styles.icon} />
            </div>
            {isOpenState && (
                <div className={styles.answer}>
                    <Text size={'m'} weight={'semibold'}>
                        {answer}
                    </Text>
                </div>
            )}
        </div>
    );
}
