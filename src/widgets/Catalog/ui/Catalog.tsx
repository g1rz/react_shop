import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

import { Button, Container, TextField, Text, Skeleton } from '~/shared/ui';
import { Product, ProductCard } from '~/entities/Product';
import { AddedControl } from '~/features/Cart/';

import styles from './Catalog.module.scss';
import { useGetProductsQuery } from '~/entities/Product/';

export function Catalog() {
    const [search, setSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [skip, setSkip] = useState(0);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [hasMore, setHasMore] = useState(false);

    const { data, error, isLoading } = useGetProductsQuery({
        search: searchQuery,
        skip,
    });

    const skeletonList = useMemo(() => {
        return Array(12)
            .fill(null)
            .map((_, index) => (
                <Skeleton key={`skeleton_${index}`} height={'367px'} />
            ));
    }, []);

    const debouncedSearch = useMemo(
        () =>
            debounce((value: string) => {
                setAllProducts([]);
                setSearchQuery(value);
                setSkip(0);
            }, 300),
        [],
    );

    useEffect(() => {
        return () => {
            setAllProducts([]);
        };
    }, []);

    useEffect(() => {
        if (data) {
            setAllProducts((prevProducts) => [
                ...prevProducts,
                ...data.products,
            ]);
            if (data.total) {
                setHasMore(
                    allProducts.length + data.products.length < data.total,
                );
            } else {
                setHasMore(false);
            }
        }
    }, [data, error, isLoading]);

    const handleSearch = (value: string) => {
        setSearch(value);
        debouncedSearch(value);
    };

    const handleShowMore = () => {
        if (data) {
            setSkip(skip + data.products.length);
        }
    };

    return (
        <section className={styles.catalog} id="catalog">
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
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search by title"
                        className={styles.search}
                    />
                    <div className={styles.grid}>
                        {isLoading && skeletonList}
                        {!isLoading &&
                            !error &&
                            data &&
                            allProducts.map(
                                ({ id, thumbnail, title, price }) => {
                                    return (
                                        <ProductCard
                                            key={id}
                                            id={id}
                                            thumbnail={thumbnail}
                                            title={title}
                                            price={price}
                                            renderControl={({
                                                initialCount,
                                                onCountChange,
                                            }) => (
                                                <AddedControl
                                                    initialCount={initialCount}
                                                    productId={id}
                                                    onCountChange={
                                                        onCountChange
                                                    }
                                                />
                                            )}
                                        />
                                    );
                                },
                            )}
                        {error && (
                            <Text align="center" color="orange" size="2xl">
                                Error receiving goods
                            </Text>
                        )}
                    </div>
                    {hasMore && (
                        <div className={styles.showMore}>
                            <Button onClick={handleShowMore}>Show more</Button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
