import { Container, Text } from '~/shared/ui';
import styles from './CartPage.module.scss';
import { CartItem } from '~/features/CartItem';
import clsx from 'clsx';

const mockProducts = [
    {
        id: 1,
        title: 'Essence Mascara Lash Princess',
        preview: '/src/entities/Product/assets/product-1.png',
        price: '$110',
        count: 1,
        isDeleted: false,
    },
    {
        id: 2,
        title: 'Essence Mascara Lash Princess',
        preview: '/src/entities/Product/assets/product-1.png',
        price: '$110',
        count: 1,
        isDeleted: false,
    },
    {
        id: 3,
        title: 'Essence Mascara Lash Princess',
        preview: '/src/entities/Product/assets/product-1.png',
        price: '$110',
        count: 5,
        isDeleted: false,
    },
    {
        id: 4,
        title: 'Essence Mascara Lash Princess',
        preview: '/src/entities/Product/assets/product-1.png',
        price: '$110',
        count: 1,
        isDeleted: true,
    },
];

export function CartPage() {
    return (
        <div className={styles.page}>
            <Container>
                <Text className={styles.title} as="h1" weight="bold" size="3xl">
                    My cart
                </Text>

                <div className={styles.grid}>
                    <div className={styles.productList}>
                        {mockProducts.map(
                            ({
                                id,
                                title,
                                preview,
                                price,
                                count,
                                isDeleted,
                            }) => (
                                <CartItem
                                    key={id}
                                    id={id}
                                    title={title}
                                    preview={preview}
                                    price={price}
                                    count={count}
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
                                3 items
                            </Text>
                        </div>
                        <div className={styles.totalRow}>
                            <Text size="l" weight="semibold" color="gray500">
                                Price without discount
                            </Text>
                            <Text size="l" weight="bold" color="gray900">
                                $700
                            </Text>
                        </div>
                        <div
                            className={clsx([
                                styles.totalRow,
                                styles.totalResult,
                            ])}
                        >
                            <Text size="xl" color="gray500" weight="semibold">
                                Total price
                            </Text>
                            <Text size="xl" color="gray900" weight="bold">
                                $590
                            </Text>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
