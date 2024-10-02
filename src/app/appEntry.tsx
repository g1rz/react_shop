import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import '~/shared/styles/index.scss';
import { appRouter } from './appRouter';
import { store } from './appStore';
import { CartProvider } from './providers/CartProviders';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <CartProvider>
                <HelmetProvider>
                    <RouterProvider router={appRouter()} />
                </HelmetProvider>
            </CartProvider>
        </ReduxProvider>
    </StrictMode>,
);
