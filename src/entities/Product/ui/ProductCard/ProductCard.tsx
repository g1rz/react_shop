import { Button, Text } from '~/shared/ui';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { IconCart } from '~/shared/ui/Icons';
import { ProductCardProps } from '../../model/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '~/app/appStore';
import {
    selectCartProducts,
    selectIsProductInCart,
    selectProductCountInCart,
    updateCart,
} from '~/features/Cart';
import { unwrapResult } from '@reduxjs/toolkit';

export function ProductCard({
    id,
    thumbnail,
    title,
    price,
    renderControl,
}: ProductCardProps) {
    const dispatch: AppDispatch = useDispatch();
    const cartProducts = useSelector((state: RootState) =>
        selectCartProducts(state),
    );

    const isAdded = useSelector((state: RootState) =>
        selectIsProductInCart(state, id),
    );
    const initialCount = useSelector((state: RootState) =>
        selectProductCountInCart(state, id),
    );

    const addToCart = (quantity: number) => {
        const products = cartProducts?.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
            };
        });
        products?.push({
            id,
            quantity,
        });

        dispatch(
            updateCart({
                products: products || [],
            }),
        )
            .then(unwrapResult)
            .catch((error) => {
                console.error('Failed to update cart', error);
            });
    };

    return (
        <article className={styles.card}>
            <div className={styles.header} data-link="Show details">
                <img className={styles.image} src={thumbnail} alt={title} />
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <Text
                        className={styles.title}
                        size={'m'}
                        weight={'semibold'}
                    >
                        {title}
                    </Text>
                    <Text className={styles.price} size={'l'}>
                        ${price}
                    </Text>
                </div>
                <div className={styles.right}>
                    {isAdded ? (
                        renderControl &&
                        renderControl({
                            initialCount,
                            onCountChange: (count) => addToCart(count),
                        })
                    ) : (
                        <Button
                            onlyIcon
                            aria-label="add to cart product"
                            onClick={() => addToCart(1)}
                        >
                            <IconCart />
                        </Button>
                    )}
                </div>
            </div>
            <Link to={`/product/${id}`} className={styles.link}></Link>
        </article>
    );
}
