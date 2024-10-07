import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { type User } from './types';
import { authApi } from '../api/authApi';

type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
};

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            isAnyOf(
                authApi.endpoints.login.matchFulfilled,
                authApi.endpoints.me.matchFulfilled,
            ),
            (state, { payload }) => {
                state.user = payload;
                state.isAuthenticated = true;
            },
        );
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
