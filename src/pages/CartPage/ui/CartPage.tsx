import { Container, Text } from '~/shared/ui';
import styles from './CartPage.module.scss';
import { CartItem, CartItemProps, selectCart } from '~/features/Cart';
import clsx from 'clsx';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { RootState } from '~/app/appStore';
import { useEffect, useState } from 'react';

export function CartPage() {
    const [products, setProducts] = useState<CartItemProps[]>([]);
    const cart = useSelector((state: RootState) => selectCart(state));

    useEffect(() => {
        if (!products.length && cart) {
            setProducts(cart?.products);
        }
        if (cart && products.length) {
            const updatedProducts = products.map((product) => {
                const isProductInCart = cart.products.find(
                    (cartProduct) => cartProduct.id === product.id,
                );
                return {
                    ...product,
                    isDeleted: !isProductInCart,
                    quantity: !isProductInCart ? 1 : product.quantity,
                };
            });
            setProducts(updatedProducts);
        }
    }, [cart]);

    return (
        <>
            <Helmet>
                <title>My cart | Goods4you</title>
            </Helmet>
            <div className={styles.page}>
                <Container>
                    <Text
                        className={styles.title}
                        as="h1"
                        weight="bold"
                        size="3xl"
                    >
                        My cart
                    </Text>

                    {cart && products && (
                        <div className={styles.grid}>
                            <div className={styles.productList}>
                                {products.map(
                                    ({
                                        id,
                                        title,
                                        thumbnail,
                                        price,
                                        quantity,
                                        discountPercentage,
                                        isDeleted,
                                    }) => (
                                        <CartItem
                                            key={id}
                                            id={id}
                                            title={title}
                                            thumbnail={thumbnail}
                                            price={price}
                                            quantity={quantity}
                                            discountPercentage={
                                                discountPercentage
                                            }
                                            isDeleted={isDeleted}
                                        />
                                    ),
                                )}
                            </div>
                            <div className={styles.total}>
                                <div className={styles.totalRow}>
                                    <Text size="l" color="gray500">
                                        Total count
                                    </Text>
                                    <Text size="l" color="gray900">
                                        {cart.totalProducts} items
                                    </Text>
                                </div>
                                <div className={styles.totalRow}>
                                    <Text
                                        size="l"
                                        weight="semibold"
                                        color="gray500"
                                    >
                                        Price without discount
                                    </Text>
                                    <Text
                                        size="l"
                                        weight="bold"
                                        color="gray900"
                                    >
                                        ${cart.total.toFixed(2)}
                                    </Text>
                                </div>
                                <div
                                    className={clsx([
                                        styles.totalRow,
                                        styles.totalResult,
                                    ])}
                                >
                                    <Text
                                        size="xl"
                                        color="gray500"
                                        weight="semibold"
                                    >
                                        Total price
                                    </Text>
                                    <Text
                                        size="xl"
                                        color="gray900"
                                        weight="bold"
                                    >
                                        ${cart.discountedTotal.toFixed(2)}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    )}

                    {!cart && (
                        <Text
                            size="xl"
                            color="gray500"
                            weight="bold"
                            align="center"
                        >
                            No items
                        </Text>
                    )}
                </Container>
            </div>
        </>
    );
}
