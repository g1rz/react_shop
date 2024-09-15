import { Button, Container, TextField } from '~/shared/ui';
import { Text } from '~/shared/ui';
import { ProductCard } from '~/entities/Product';

import styles from './Catalog.module.scss';
import { useState } from 'react';
import { AddedControl } from '~/features/AddedControl';

type Props = {};

const mockProducts = [
    {
        id: 1,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: true,
    },
    {
        id: 2,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 3,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 4,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 5,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 6,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 7,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 8,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 9,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 10,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 11,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
    {
        id: 12,
        preview: '/src/entities/product/assets/product-1.png',
        title: 'Essence Mascara Lash Princess',
        price: '$110',
        isAdded: false,
    },
];

export function Catalog({}: Props) {
    const [search, setSearch] = useState('');

    return (
        <div className={styles.catalog} id="catalog">
            <Container>
                <div className={styles.catalogInner}>
                    <Text
                        as={'h2'}
                        size={'3xl'}
                        weight={'bold'}
                        className={styles.title}
                    >
                        Catalog
                    </Text>
                    <TextField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by title"
                        className={styles.search}
                    />
                    <div className={styles.grid}>
                        {mockProducts.map(
                            ({ id, preview, title, price, isAdded }) => (
                                <ProductCard
                                    key={id}
                                    id={id}
                                    preview={preview}
                                    title={title}
                                    price={price}
                                    isAdded={isAdded}
                                    renderControl={({
                                        initialCount,
                                        onCountChange,
                                    }) => (
                                        <AddedControl
                                            initialCount={initialCount}
                                            onCountChange={onCountChange}
                                        />
                                    )}
                                />
                            ),
                        )}
                    </div>
                    <div className={styles.showMore}>
                        <Button>Show more</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
