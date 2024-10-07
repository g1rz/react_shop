import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import '~/shared/styles/index.scss';
import { appRouter } from './appRouter';
import { store } from './appStore';
import { InitProvider } from './providers/InitProviders';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <InitProvider>
                <HelmetProvider>
                    <RouterProvider router={appRouter()} />
                </HelmetProvider>
            </InitProvider>
        </ReduxProvider>
    </StrictMode>,
);
