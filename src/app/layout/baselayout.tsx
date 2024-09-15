import { Layout } from '~/shared/ui';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';
import ScrollToAnchor from './ScrollToAnchor';

export const baselayout = (
    <>
        <ScrollToAnchor />
        <Layout headerSlot={<Header />} footerSlot={<Footer />} />
    </>
);
