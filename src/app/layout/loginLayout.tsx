import { Layout } from '~/shared/ui';

import { HeaderEmpty } from '~/widgets/Header';
import { Helmet } from 'react-helmet-async';

export const loginlayout = (
    <>
        <Helmet>
            <link rel="icon" href="/public/favicon.svg" />
        </Helmet>

        <Layout headerSlot={<HeaderEmpty />} />
    </>
);
