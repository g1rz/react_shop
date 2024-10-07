import { ReactNode } from 'react';

export type Product = {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    images?: string[];
    rating?: number;
    discountPercentage?: number;
    warrantyInformation?: string;
    shippingInformation?: string;
    stock?: number;
    description?: string;
    tags?: string[];
};

export type ProductCardProps = Product & {
    count?: number;
    isAdded?: boolean;
    initialCount?: number;
    stock?: number;
    onCountChange?: (productId: number, count: number) => void;
    renderControl?: (props: {
        initialCount?: number;
        productId: number;
        maxCount?: number;
        onCountChange?: (count: number) => void;
    }) => ReactNode;
};

export type ProductDetailProps = Product & ProductCardProps;

export type GetProducts = {
    search?: string;
    limit?: number;
    skip?: number;
    total?: number;
};

export type GetProductsResponse = GetProducts & {
    products: Product[];
};
