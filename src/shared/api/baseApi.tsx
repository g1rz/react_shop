import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from './apiPath';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_PATH.baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: () => ({}),
});
