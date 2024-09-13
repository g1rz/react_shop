import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '~/shared/styles/index.scss';
import { appRouter } from './appRouter';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={appRouter()} />
    </StrictMode>,
);
