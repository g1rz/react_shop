import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '~/shared/styles/index.scss';
import { appRouter } from './appRouter';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={appRouter()} />
        </HelmetProvider>
    </StrictMode>,
);
