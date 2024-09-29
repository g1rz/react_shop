import { Button, Text } from '~/shared/ui';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { IconCart } from '~/shared/ui/Icons';
import { ProductCardProps } from '../../model/types';
import { useSelector } from 'react-redux';
import { RootState } from '~/app/appStore';
import {
    selectIsProductInCart,
    selectProductCountInCart,
    useAddToCart,
} from '~/features/Cart';

export function ProductCard({
    id,
    thumbnail,
    title,
    price,
    renderControl,
    stock,
}: ProductCardProps) {
    const { addToCart } = useAddToCart();

    const isAdded = useSelector((state: RootState) =>
        selectIsProductInCart(state, id),
    );
    const initialCount = useSelector((state: RootState) =>
        selectProductCountInCart(state, id),
    );

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
                            productId: id,
                            maxCount: stock,
                        })
                    ) : (
                        <Button
                            onlyIcon
                            aria-label="add to cart product"
                            onClick={() =>
                                addToCart({ productId: id, quantity: 1 })
                            }
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
