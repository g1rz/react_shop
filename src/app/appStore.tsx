import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from '~/features/auth';
import { cartReducer } from '~/features/Cart';
import { baseApi } from '~/shared/api';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
