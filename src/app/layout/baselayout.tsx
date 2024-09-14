import { Layout } from '~/shared/ui';
import { Footer } from '~/widgets/Footer';
import { Header } from '~/widgets/Header';

export const baselayout = (
    <Layout headerSlot={<Header />} footerSlot={<Footer />} />
);
