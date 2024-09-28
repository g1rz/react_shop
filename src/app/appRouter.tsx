import { createBrowserRouter, Navigate } from 'react-router-dom';
import { baselayout } from './layout/baselayout';
import { MainPage } from '~/pages/MainPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { ProductPage } from '~/pages/ProductPage';
import { CartPage } from '~/pages/CartPage';
import { loginlayout } from './layout/loginLayout';
import { LoginPage } from '~/pages/LoginPage';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './appStore';

type GuardProps = {
    children: ReactNode;
};

function AuthGuard({ children }: GuardProps) {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

function LoginGuard({ children }: GuardProps) {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
}

export function appRouter() {
    return createBrowserRouter([
        {
            element: baselayout,
            children: [
                {
                    path: '/',
                    element: (
                        <AuthGuard>
                            <MainPage />,
                        </AuthGuard>
                    ),
                },
                {
                    path: '/product/:id',
                    element: (
                        <AuthGuard>
                            <ProductPage />
                        </AuthGuard>
                    ),
                },
                {
                    path: '/cart',
                    element: (
                        <AuthGuard>
                            <CartPage />
                        </AuthGuard>
                    ),
                },
                {
                    path: '*',
                    element: (
                        <AuthGuard>
                            <NotFoundPage />
                        </AuthGuard>
                    ),
                },
            ],
        },
        {
            element: loginlayout,
            children: [
                {
                    path: '/login',
                    element: (
                        <LoginGuard>
                            <LoginPage />
                        </LoginGuard>
                    ),
                },
            ],
        },
    ]);
}
