import clsx from 'clsx';
import styles from './Text.module.scss';
import { ElementType, ReactNode } from 'react';

type Colors =
    | 'orange'
    | 'violet'
    | 'orangeDark'
    | 'orangeWhite'
    | 'white'
    | 'gray100'
    | 'gray200'
    | 'gray500'
    | 'gray600'
    | 'gray900';

type Props<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    className?: string;
    size?: Size;
    weight?: FontWeight;
    color?: Colors;
    onClick?: () => void;
};

export function Text<T extends React.ElementType = 'p'>({
    as,
    children,
    className,
    onClick,
    weight = 'regular',
    color = 'gray900',
    size = 's',
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
    const Tag = as || 'p';

    return (
        <Tag
            className={clsx([
                styles[`size_${size}`],
                styles[weight],
                styles[color as string],
                className,
            ])}
            onClick={onClick}
        >
            {children}
        </Tag>
    );
}
