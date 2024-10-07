import { AppLink, AppLogo, Button, Container } from '~/shared/ui/';

import styles from './Header.module.scss';
import { CartButton } from '../CartButton/CartButton';
import { IconBurger, IconClose } from '~/shared/ui/Icons';
import { useState } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from '~/app/appStore';
import { selectCartTotalQuantity } from '~/features/Cart';

export function Header() {
    const user = useSelector((state: RootState) => state.auth.user);

    const totalProductInCart = useSelector((state: RootState) =>
        selectCartTotalQuantity(state),
    );

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.row}>
                    <AppLogo />
                    <Button
                        className={styles.burger}
                        onlyIcon
                        onClick={() =>
                            setIsOpenMenu((isOpenMenu) => !isOpenMenu)
                        }
                    >
                        {isOpenMenu ? <IconClose /> : <IconBurger />}
                    </Button>
                    <nav
                        className={clsx([
                            styles.menu,
                            isOpenMenu && styles.isOpen,
                        ])}
                    >
                        <AppLink to="/#catalog" type={'white'}>
                            Catalog
                        </AppLink>
                        <AppLink to="/#faq" type={'white'}>
                            FAQ
                        </AppLink>
                        <CartButton
                            textButton="Cart"
                            to="/cart"
                            count={totalProductInCart}
                        />
                        <AppLink to="/" type={'white'}>
                            {user?.firstName + ' ' + user?.lastName}
                        </AppLink>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
