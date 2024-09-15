import { AppLink, AppLogo, Button, Container } from '~/shared/ui/';

import styles from './Header.module.scss';
import { CartButton } from '../CartButton/CartButton';
import { IconBurger, IconClose } from '~/shared/ui/Icons';
import { useState } from 'react';
import clsx from 'clsx';

export function Header() {
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
                        <CartButton textButton="Cart" to="/cart" count={100} />
                        <AppLink to="/" type={'white'}>
                            Johnson Smith
                        </AppLink>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
