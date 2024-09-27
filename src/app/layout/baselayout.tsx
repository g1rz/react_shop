import { Layout } from '~/shared/ui';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';
import ScrollToAnchor from './ScrollToAnchor';
import { Helmet } from 'react-helmet-async';

export const baselayout = (
    <>
        <Helmet>
            <link rel="icon" href="/public/favicon.svg" />
        </Helmet>
        <ScrollToAnchor />
        <Layout headerSlot={<Header />} footerSlot={<Footer />} />
    </>
);
