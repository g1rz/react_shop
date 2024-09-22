export { ProductCard } from './ui/ProductCard/ProductCard';
export {
    type Product,
    type GetProducts,
    type ProductDetailProps,
} from './model/types';
export { productApi } from './api/productApi';

export { useGetProductsQuery, useGetProductQuery } from './api/productApi';
