import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import { Button, Text } from '~/shared/ui';

import styles from './AddedControl.module.scss';
import { IconMinus, IconPlus } from '~/shared/ui/Icons';

import { useAddToCart } from '../../lib/useAddToCart';

type Props = {
    productId: number;
    initialCount?: number;
    onCountChange?: (count: number) => void;
    className?: string;
    minCount?: number;
    maxCount?: number;
};

export function AddedControl({
    productId,
    initialCount = 0,
    onCountChange,
    className,
    minCount = 0,
    maxCount = 10,
}: Props) {
    const [count, setCount] = useState(initialCount);
    const { addToCart, isLoading } = useAddToCart();

    const handleIncrement = () => {
        if (count < maxCount) {
            const newCount = count + 1;
            setCount(newCount);
            addToCart({ productId, quantity: newCount });
            if (onCountChange) {
                onCountChange(newCount);
            }
        }
    };

    const handleDecrement = () => {
        if (count > minCount) {
            const newCount = count - 1;
            setCount(newCount);
            addToCart({ productId, quantity: newCount });
            if (onCountChange) {
                onCountChange(newCount);
            }
        }
    };

    return (
        <div className={clsx([styles.control, className])}>
            <Button
                onClick={handleDecrement}
                onlyIcon
                disabled={count <= minCount || isLoading}
                aria-label="minus product"
            >
                <IconMinus />
            </Button>
            <Text as={'span'} size={'s'} className={styles.count}>
                {count} item
            </Text>
            <Button
                onClick={handleIncrement}
                onlyIcon
                disabled={count >= maxCount || isLoading}
                aria-label="plus product"
            >
                <IconPlus />
            </Button>
        </div>
    );
}
