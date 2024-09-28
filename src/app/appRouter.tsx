import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { baselayout } from './layout/baselayout';
import { MainPage } from '~/pages/MainPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { ProductPage } from '~/pages/ProductPage';
import { CartPage } from '~/pages/CartPage';
import { loginlayout } from './layout/loginLayout';
import { LoginPage } from '~/pages/LoginPage';
import { ReactNode, useEffect } from 'react';
import { useMeQuery } from '~/features/auth';
import { Loader } from '~/widgets/Loader';
import { useSelector } from 'react-redux';
import { RootState } from './appStore';

type GuardProps = {
    children: ReactNode;
};

function AuthGuard({ children }: GuardProps) {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const {
        isLoading,
        isError,
        data: user,
    } = useMeQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        if (isAuthenticated) {
            return;
        }
        if (!token || isError) {
            navigate('/login');
        }
        if (token && user) {
            navigate('/');
        }
    }, [token, isError, navigate, user, isAuthenticated]);

    if (isLoading) {
        return <Loader />;
    }

    return children;
}

function LoginGuard({ children }: GuardProps) {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const {
        isLoading,
        isError,
        data: user,
    } = useMeQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        if (isAuthenticated || (token && user)) {
            navigate('/');
        }
    }, [token, isError, navigate, user, isAuthenticated]);

    if (isLoading) {
        return <Loader />;
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
