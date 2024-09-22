import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { CartProps, CartResponse } from './types';
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

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async (id: number = 15) => {
        const response = await fetch(
            `${API_PATH.baseUrl}${API_PATH.cartByUser(id)}`,
        );
        const data = await response.json();
        return data as CartResponse;
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
            });
    },
});

export const selectCartItems = (state: RootState) =>
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
