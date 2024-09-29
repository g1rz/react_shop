import { Button, Container, Rating, Text } from '~/shared/ui';
import styles from './ProductDetail.module.scss';
import clsx from 'clsx';
import { ProductDetailProps } from '~/entities/Product/model/types';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { useEffect, useRef, useState } from 'react';
import { Thumbs } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { RootState } from '~/app/appStore';
import {
    selectIsProductInCart,
    selectProductCountInCart,
} from '~/features/Cart';
import { AddedControl } from '~/features/Cart';

export function ProductDetail({ product }: { product: ProductDetailProps }) {
    const [activeThumbIndex, setActiveThumbIndex] = useState(0);
    const thumbsSwiper = useRef<SwiperClass | null>(null);

    const price = product.discountPercentage
        ? product.price - (product.price * product.discountPercentage) / 100
        : product.price;

    const isProductInCart = useSelector((state: RootState) =>
        selectIsProductInCart(state, product.id),
    );

    const productInCart = useSelector((state: RootState) =>
        selectProductCountInCart(state, product.id),
    );

    useEffect(() => {
        if (thumbsSwiper.current) {
            thumbsSwiper.current.update();
        }
    }, [product.images]);

    return (
        <Container>
            <div className={styles.productDetail}>
                {product.images && (
                    <div className={styles.images}>
                        <Swiper
                            thumbs={{ swiper: thumbsSwiper.current }}
                            modules={[Thumbs]}
                            className={styles.imagesBig}
                            onSlideChange={(swiper) => {
                                setActiveThumbIndex(swiper.activeIndex);
                            }}
                        >
                            {product.images?.map((image, index) => (
                                <SwiperSlide
                                    key={`big_${index}`}
                                    className={styles.imageWrap}
                                >
                                    <img src={image} title={product.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            modules={[Thumbs]}
                            onSwiper={(swiper) => {
                                thumbsSwiper.current = swiper;
                            }}
                            className={styles.imagesMin}
                            slidesPerView={'auto'}
                            spaceBetween={20}
                        >
                            {product.images?.map((image, index) => (
                                <SwiperSlide
                                    key={`min_${index}`}
                                    className={clsx([
                                        styles.imageWrap,
                                        activeThumbIndex === index &&
                                            styles.imagesWrapActive,
                                    ])}
                                >
                                    <img src={image} title={product.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                <div className={styles.content}>
                    <Text
                        className={styles.title}
                        as={'h1'}
                        size={'3xl'}
                        weight={'semibold'}
                    >
                        {product.title}
                    </Text>
                    <div className={styles.contentInner}>
                        <div className={styles.row}>
                            <Rating value={product.rating || 0} />
                            <Text size="m" className={styles.category}>
                                {product.tags.join(', ')}
                            </Text>
                        </div>
                        <div className={styles.stock}>
                            <Text size="l" weight="medium" color="orange">
                                In Stock - Only {product.stock} left!
                            </Text>
                        </div>
                        <Text className={styles.description} size="l">
                            {product.description}
                        </Text>
                        <div className={styles.other}>
                            <Text size="m">{product.warrantyInformation}</Text>
                            <Text size="m">{product.shippingInformation}</Text>
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
                                        ${price.toFixed(2)}
                                    </Text>
                                    <Text
                                        as="del"
                                        size="m"
                                        weight="medium"
                                        color="gray600"
                                    >
                                        ${product.price}
                                    </Text>
                                </div>
                                {product.discountPercentage && (
                                    <div className={styles.discountInfo}>
                                        <Text
                                            as="span"
                                            size="m"
                                            color="gray900"
                                        >
                                            Your discount:
                                        </Text>
                                        <Text
                                            as="span"
                                            size="m"
                                            weight="semibold"
                                        >
                                            {product.discountPercentage} %
                                        </Text>
                                    </div>
                                )}
                            </div>
                            {isProductInCart && (
                                <AddedControl initialCount={productInCart} />
                            )}
                            {!isProductInCart && <Button>Add to cart</Button>}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
