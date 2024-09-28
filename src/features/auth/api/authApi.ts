import { baseApi } from '~/shared/api/baseApi';
import { GetUser, User } from '../model/types';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<User, GetUser>({
            query: ({ username, password }: GetUser) => ({
                url: '/auth/login',
                method: 'POST',
                body: {
                    username,
                    password,
                },
            }),
        }),
        me: builder.query<User, void>({
            query: () => ({
                url: '/auth/me',
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useMeQuery } = authApi;
