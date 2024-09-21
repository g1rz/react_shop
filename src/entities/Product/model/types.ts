import { ReactNode } from 'react';

export type Product = {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    images?: string[];
    rating?: number;
};

export type ProductCardProps = Product & {
    count?: number;
    isAdded?: boolean;
    initialCount?: number;
    onCountChange?: (productId: number, count: number) => void;
    renderControl?: (props: {
        initialCount: number;
        onCountChange: (count: number) => void;
    }) => ReactNode;
};

export type GetProducts = {
    search?: string;
    limit?: number;
    skip?: number;
};

export interface GetProductsResponse {
    products: Product[];
    limit: number;
    skip: number;
    total: number;
}
