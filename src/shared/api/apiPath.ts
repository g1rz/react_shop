export const API_PATH = {
    baseUrl: 'https://dummyjson.com',
    cartByUser: (id?: number) => `${API_PATH.baseUrl}/carts/user/${id}`,
    updateCart: (cartId: number) => `${API_PATH.baseUrl}/carts/${cartId}`,
};
