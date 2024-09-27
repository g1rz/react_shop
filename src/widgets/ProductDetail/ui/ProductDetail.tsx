import { Button, Container, Rating, Text } from '~/shared/ui';
import styles from './ProductDetail.module.scss';
import clsx from 'clsx';

const mockImages = [
    {
        imageBig: '/src/widgets/ProductDetail/assets/product-1.png',
        imageMin: '/src/widgets/ProductDetail/assets/product-1-min.png',
    },
    {
        imageBig: '/src/widgets/ProductDetail/assets/product-1.png',
        imageMin: '/src/widgets/ProductDetail/assets/product-1-min.png',
    },
    {
        imageBig: '/src/widgets/ProductDetail/assets/product-1.png',
        imageMin: '/src/widgets/ProductDetail/assets/product-1-min.png',
    },
    {
        imageBig: '/src/widgets/ProductDetail/assets/product-1.png',
        imageMin: '/src/widgets/ProductDetail/assets/product-1-min.png',
    },
    {
        imageBig: '/src/widgets/ProductDetail/assets/product-1.png',
        imageMin: '/src/widgets/ProductDetail/assets/product-1-min.png',
    },
    {
        imageBig: '/src/widgets/ProductDetail/assets/product-1.png',
        imageMin: '/src/widgets/ProductDetail/assets/product-1-min.png',
    },
];

export function ProductDetail() {
    const tempName = 'Essence Mascara Lash Princess';
    return (
        <Container>
            <div className={styles.productDetail}>
                <div className={styles.images}>
                    <div className={styles.imagesBig}>
                        <div className={styles.imageWrap}>
                            <img
                                src={mockImages[0].imageBig}
                                title={tempName}
                            />
                        </div>
                    </div>

                    <div className={styles.imagesMin}>
                        {mockImages.map(({ imageMin }, index) => (
                            <div
                                className={clsx([
                                    styles.imageWrap,
                                    index === 0 && styles.imagesWrapActive,
                                ])}
                                key={index}
                            >
                                <img src={imageMin} alt={tempName} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.content}>
                    <Text
                        className={styles.title}
                        as={'h1'}
                        size={'3xl'}
                        weight={'semibold'}
                    >
                        Essence Mascara Lash Princess
                    </Text>
                    <div className={styles.contentInner}>
                        <div className={styles.row}>
                            <Rating value={4} />
                            <Text size="m" className={styles.category}>
                                electronics, selfie accessories
                            </Text>
                        </div>
                        <div className={styles.stock}>
                            <Text size="l" weight="medium" color="orange">
                                In Stock - Only 5 left!
                            </Text>
                        </div>
                        <Text className={styles.description} size="l">
                            The Essence Mascara Lash Princess is a popular
                            mascara known for its volumizing and lengthening
                            effects. Achieve dramatic lashes with this
                            long-lasting and cruelty-free formula.
                        </Text>
                        <div className={styles.other}>
                            <Text size="m">1 month warranty</Text>
                            <Text size="m">Ships in 1 month</Text>
                        </div>
                        <div className={styles.buy}>
                            <div className={styles.priceContent}>
                                <div className={styles.priceInfo}>
                                    <Text
                                        as="span"
                                        size="3xl"
                                        weight="semibold"
                                        color="gray900"
                                    >
                                        $7.17
                                    </Text>
                                    <Text
                                        as="del"
                                        size="m"
                                        weight="medium"
                                        color="gray600"
                                    >
                                        $9.99
                                    </Text>
                                </div>
                                <div className={styles.discountInfo}>
                                    <Text as="span" size="m" color="gray900">
                                        Your discount:
                                    </Text>
                                    <Text as="span" size="m" weight="semibold">
                                        14.5%
                                    </Text>
                                </div>
                            </div>
                            <Button>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
