// import styles from './MainPage.module.scss';

import { Helmet } from 'react-helmet';
import { Hero } from '~/widgets/Hero';

export function MainPage() {
    return (
        <>
            <Helmet>
                <title>Catalog | Goods4you</title>
            </Helmet>
            <Hero
                title="Any products from famous brands with worldwide delivery"
                text="We&nbsp;sell smartphones, laptops, clothes, shoes and many other products at&nbsp;low prices"
                btnText="Go to shopping"
                btnLink="/#catalog"
                background="Goods4you"
            />
        </>
    );
}
