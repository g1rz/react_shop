import { baseApi } from '~/shared/api/baseApi';
import { GetUser, User } from '../model/types';
import { API_PATH } from '~/shared/api';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<User, GetUser>({
            query: ({ username, password }: GetUser) => ({
                url: API_PATH.login(),
                method: 'POST',
                body: {
                    username,
                    password,
                },
            }),
        }),
        me: builder.query<User, void>({
            query: () => ({
                url: API_PATH.me(),
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useMeQuery } = authApi;
