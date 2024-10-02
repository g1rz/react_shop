import { Container, Text } from '~/shared/ui';
import styles from './CartPage.module.scss';
import { CartItem, selectCart } from '~/features/Cart';
import clsx from 'clsx';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { RootState } from '~/app/appStore';

export function CartPage() {
    const cart = useSelector((state: RootState) => selectCart(state));

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

                    {cart && cart.products && (
                        <div className={styles.grid}>
                            <div className={styles.productList}>
                                {cart.products.map(
                                    ({
                                        id,
                                        title,
                                        thumbnail,
                                        price,
                                        quantity,
                                        discountPercentage,
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
                                        ${cart.total}
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
                                        ${cart.discountedTotal}
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
