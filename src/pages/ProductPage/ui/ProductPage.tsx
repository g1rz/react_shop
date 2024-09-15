import { ProductDetail } from '~/widgets/ProductDetail';
import styles from './ProductPage.module.scss';
import { Helmet } from 'react-helmet-async';

export function ProductPage() {
    return (
        <>
            <Helmet>
                <title>Essence Mascara Lash Princess | Goods4you</title>
            </Helmet>
            <div className={styles.page}>
                <ProductDetail />
            </div>
        </>
    );
}
