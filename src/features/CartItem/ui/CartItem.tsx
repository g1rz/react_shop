import { AddedControl } from '~/features/AddedControl';
import styles from './CartItem.module.scss';
import { AppLink, Button, Text } from '~/shared/ui';
import { IconCart } from '~/shared/ui/Icons';
import clsx from 'clsx';

type Props = {
    id: number;
    title: string;
    preview: string;
    price: string;
    count: number;
    isDeleted: boolean;
};

export function CartItem({
    id,
    title,
    preview,
    price,
    count,
    isDeleted,
}: Props) {
    return (
        <div className={clsx([styles.card, isDeleted && styles.deleted])}>
            <div className={styles.left}>
                <div className={styles.preview}>
                    <img src={preview} alt={title} />
                </div>
                <div className={styles.content}>
                    <Text
                        as={AppLink}
                        to={`/product/${id}`}
                        size="m"
                        weight="semibold"
                        type="currentColor"
                        className={styles.title}
                    >
                        {title}
                    </Text>
                    <Text as="span" size="l">
                        {price}
                    </Text>
                </div>
            </div>
            <div className={styles.right}>
                {isDeleted ? (
                    <Button onlyIcon aria-label="add to cart product">
                        <IconCart />
                    </Button>
                ) : (
                    <>
                        <AddedControl initialCount={count} />
                        <AppLink className={styles.deleteLink}>Delete</AppLink>
                    </>
                )}
            </div>
        </div>
    );
}
