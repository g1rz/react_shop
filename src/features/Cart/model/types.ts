export type CartItemProps = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    discountPercentage: number;
    discountedTotal?: number;
    thumbnail: string;
    isDeleted?: boolean;
};

export type CartProps = {
    id: number;
    products: CartItemProps[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
};

export type CartResponse = {
    carts: CartProps[];
    total: number;
    skip: number;
    limit: number;
};

export type UpdateCartProps = {
    products: { id: number; quantity: number }[];
};
