import { Layout } from '~/shared/ui';
import { Footer, Header } from '~/widgets';

export const baselayout = (
    <Layout headerSlot={<Header />} footerSlot={<Footer />} />
);
