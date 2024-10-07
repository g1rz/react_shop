import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '~/app/appStore';
import { selectCartProducts, updateCart } from '..';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';

export function useAddToCart() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const dispatch: AppDispatch = useDispatch();
    const cartProducts = useSelector((state: RootState) =>
        selectCartProducts(state),
    );
    const addToCart = ({
        productId,
        quantity,
    }: {
        productId: number;
        quantity: number;
    }) => {
        let products = cartProducts?.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
            };
        });

        const productInCart = products?.find(
            (product) => product.id === productId,
        );

        if (productInCart) {
            productInCart.quantity = quantity;
        } else {
            products?.push({
                id: productId,
                quantity,
            });
        }

        products = products?.filter((product) => product.quantity !== 0);

        setIsLoading(true);
        dispatch(
            updateCart({
                products: products || [],
            }),
        )
            .then(unwrapResult)
            .then(() => setIsLoading(false))
            .catch((error) => {
                setError(error);
            });
    };
    return {
        addToCart,
        isLoading,
        error,
    };
}
