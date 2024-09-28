import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '~/features/Cart';
import { AppDispatch, RootState } from '~/app/appStore';
import { useMeQuery } from '~/features/auth';
import { Loader } from '~/widgets/Loader';

export function InitProvider({ children }: { children: ReactNode }) {
    const dispatch = useDispatch<AppDispatch>();
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );

    const token = localStorage.getItem('token');
    const { isLoading, data: user } = useMeQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(fetchCart(user?.id));
        }
    }, [user, isAuthenticated, dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    return children;
}
