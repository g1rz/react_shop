import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '~/features/Cart';
import { AppDispatch } from '~/app/appStore';

export function CartProvider({ children }: { children: ReactNode }) {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const userId = 15;
        dispatch(fetchCart(userId));
    }, [dispatch]);

    return <>{children}</>;
}
