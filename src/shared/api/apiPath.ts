export const API_PATH = {
    baseUrl: 'https://dummyjson.com/auth',
    cartByUser: (id?: number) => `${API_PATH.baseUrl}/carts/user/${id}`,
    updateCart: (cartId: number) => `${API_PATH.baseUrl}/carts/${cartId}`,
    productsBySearch: (query: string) => `/products/search?${query}`,
    productDetail: (id: number) => `/products/${id}`,
    login: () => '/login',
    me: () => '/me',
};
