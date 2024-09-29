import React from 'react';
import { AddedControl } from '../AddedControl/AddedControl';
import styles from './CartItem.module.scss';
import { AppLink, Button, Text } from '~/shared/ui';
import { IconCart } from '~/shared/ui/Icons';
import clsx from 'clsx';
import { CartItemProps } from '../../model/types';
import { useAddToCart } from '../../lib/useAddToCart';

export function CartItem({
    id,
    title,
    thumbnail,
    price,
    quantity,
    discountPercentage,
    isDeleted,
}: CartItemProps) {
    const { addToCart, isLoading } = useAddToCart();
    const discountedPrice = discountPercentage
        ? (price - (price * discountPercentage) / 100).toFixed(2)
        : price;

    return (
        <div className={clsx([styles.card, isDeleted && styles.deleted])}>
            <div className={styles.left}>
                <div className={styles.preview}>
                    <img src={thumbnail} alt={title} />
                </div>
                <div className={styles.content}>
                    <Text
                        as={AppLink}
                        to={`/product/${id}`}
                        size="m"
                        weight="semibold"
                        type="currentColor"
                        className={styles.title}
                    >
                        {title}
                    </Text>
                    <Text as="span" size="l">
                        ${discountedPrice}
                    </Text>
                </div>
            </div>
            <div className={styles.right}>
                {isDeleted ? (
                    <Button
                        onlyIcon
                        aria-label="add to cart product"
                        disabled={isLoading}
                        onClick={() =>
                            addToCart({ productId: id, quantity: 1 })
                        }
                    >
                        <IconCart />
                    </Button>
                ) : (
                    <>
                        <AddedControl initialCount={quantity} productId={id} />
                        <AppLink
                            onClick={() =>
                                addToCart({ productId: id, quantity: 0 })
                            }
                            disabled={isLoading}
                            className={styles.deleteLink}
                        >
                            Delete
                        </AppLink>
                    </>
                )}
            </div>
        </div>
    );
}
