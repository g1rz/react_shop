import { ProductDetail } from '~/widgets/ProductDetail';
import styles from './ProductPage.module.scss';

export function ProductPage() {
    return (
        <div className={styles.page}>
            <ProductDetail />
        </div>
    );
}
