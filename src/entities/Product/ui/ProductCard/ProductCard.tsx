import { Button, Text } from '~/shared/ui';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { type Product } from '../../model/types';

type Props = Product & {
    count?: number;
    isAdded?: boolean;
    initialCount?: number;
    onCountChange?: (productId: number, count: number) => void;
    renderControl?: (props: {
        initialCount: number;
        onCountChange: (count: number) => void;
    }) => React.ReactNode;
};

export function ProductCard({
    id,
    preview,
    title,
    price,
    isAdded,
    renderControl,
    onCountChange,
    initialCount = 0,
}: Props) {
    const handleCountChange = (count: number) => {
        if (onCountChange) {
            onCountChange(id, count);
        }
    };

    return (
        <article className={styles.card}>
            <div className={styles.header} data-link="Show details">
                <img className={styles.image} src={preview} alt={title} />
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
                        {price}
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
                        <Button onlyIcon>
                            <svg></svg>
                        </Button>
                    )}
                </div>
            </div>
            <Link to={`/product/${id}`} className={styles.link}></Link>
        </article>
    );
}
