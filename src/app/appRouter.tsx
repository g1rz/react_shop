import { createBrowserRouter } from 'react-router-dom';
import { baselayout } from './layout/baselayout';
import { MainPage } from '~/pages/MainPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { ProductPage } from '~/pages/ProductPage';
import { CartPage } from '~/pages/CartPage';

export function appRouter() {
    return createBrowserRouter([
        {
            element: baselayout,
            children: [
                {
                    path: '/',
                    element: <MainPage />,
                },
                {
                    path: '/product/:id',
                    element: <ProductPage />,
                },
                {
                    path: '/cart',
                    element: <CartPage />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
    ]);
}
