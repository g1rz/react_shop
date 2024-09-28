import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { CartProps, CartResponse, UpdateCartProps } from './types';
import { API_PATH } from '~/shared/api';
import { RootState } from '~/app/appStore';

export type CartState = {
    currentCart: CartProps | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: CartState = {
    currentCart: null,
    status: 'idle',
    error: null,
};

const token = localStorage.getItem('token');

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async (id: number) => {
        const response = await fetch(API_PATH.cartByUser(id), {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        const data = await response.json();
        return data as CartResponse;
    },
);

export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async ({ products }: UpdateCartProps, { getState }) => {
        const state = getState() as RootState;
        const cartId = state.cart.currentCart?.id;

        if (!cartId) {
            throw new Error('Cart ID is missing');
        }

        const response = await fetch(API_PATH.updateCart(cartId), {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                merge: false,
                products,
            }),
        });
        const data = await response.json();
        return data as CartProps;
    },
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentCart = action.payload.carts[0];
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(updateCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentCart = action.payload;
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const selectCart = (state: RootState) => state.cart.currentCart;
export const selectCartProducts = (state: RootState) =>
    state.cart.currentCart?.products;
export const selectCartTotalQuantity = (state: RootState) =>
    state.cart.currentCart?.totalQuantity;
export const selectIsProductInCart = (state: RootState, productId: number) => {
    const cartItems = state.cart.currentCart?.products || [];
    return cartItems.some((item) => item.id === productId);
};
export const selectProductCountInCart = (
    state: RootState,
    productId: number,
) => {
    const cartItems = state.cart.currentCart?.products || [];
    const product = cartItems.find((item) => item.id === productId);

    return product?.quantity;
};

export default cartSlice.reducer;
