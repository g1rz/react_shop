import { ProductDetail } from '~/widgets/ProductDetail';
import styles from './ProductPage.module.scss';
import { Helmet } from 'react-helmet-async';
import { useGetProductQuery } from '~/entities/Product';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Text } from '~/shared/ui';

export function ProductPage() {
    const [title, setTitle] = useState('Goods4you');

    const { id } = useParams<{ id: string }>();
    const productId = Number(id);
    const { data, error, isLoading } = useGetProductQuery(productId);

    useEffect(() => {
        console.log(data, error, isLoading);
        if (data) {
            setTitle(`${data.title} | Goods4you`);
        }
    }, [data, error, isLoading]);

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className={styles.page}>
                {isLoading && <p>loading</p>}
                {!isLoading && !error && data && (
                    <ProductDetail product={data} />
                )}
                {error && (
                    <Text align="center" color="orange" size="2xl">
                        Error receiving product
                    </Text>
                )}
            </div>
        </>
    );
}
