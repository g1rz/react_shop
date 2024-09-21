import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

import { Button, Container, TextField, Text, Skeleton } from '~/shared/ui';
import { Product, ProductCard } from '~/entities/Product';
import { AddedControl } from '~/features/AddedControl';

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
                setSkip(0); // Сбрасываем skip при новом поиске
            }, 300),
        [],
    );

    useEffect(() => {
        console.log(data, error, isLoading);
        if (data) {
            setAllProducts((prevProducts) => [
                ...prevProducts,
                ...data.products,
            ]);
            setHasMore(allProducts.length + data.products.length < data.total);
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
                        // onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by title"
                        className={styles.search}
                    />
                    <div className={styles.grid}>
                        {isLoading && skeletonList}
                        {!isLoading &&
                            data &&
                            allProducts.map(
                                ({ id, thumbnail, title, price }) => (
                                    <ProductCard
                                        key={id}
                                        id={id}
                                        thumbnail={thumbnail}
                                        title={title}
                                        price={price}
                                        // isAdded={isAdded}
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
