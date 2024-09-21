import { baseApi } from '~/shared/api/baseApi';
import { GetProducts, GetProductsResponse } from '../model/types';

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<GetProductsResponse, GetProducts>({
            query: ({ search, limit = 12, skip = 0 }: GetProducts) => {
                const queryParams = new URLSearchParams();
                if (search) {
                    queryParams.append('q', search);
                }
                queryParams.append('limit', limit.toString());
                queryParams.append('skip', skip.toString());

                return `/products/search?${queryParams.toString()}`;
            },
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
