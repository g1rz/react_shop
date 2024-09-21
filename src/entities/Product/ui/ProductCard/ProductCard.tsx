import { Button, Text } from '~/shared/ui';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { IconCart } from '~/shared/ui/Icons';
import { ProductCardProps } from '../../model/types';

export function ProductCard({
    id,
    thumbnail,
    title,
    price,
    isAdded,
    renderControl,
    onCountChange,
    initialCount = 1,
}: ProductCardProps) {
    const handleCountChange = (count: number) => {
        if (onCountChange) {
            onCountChange(id, count);
        }
    };

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
                            onCountChange: handleCountChange,
                        })
                    ) : (
                        <Button onlyIcon aria-label="add to cart product">
                            <IconCart />
                        </Button>
                    )}
                </div>
            </div>
            <Link to={`/product/${id}`} className={styles.link}></Link>
        </article>
    );
}
