import clsx from 'clsx';
import styles from './Text.module.scss';
import { ElementType, ReactNode } from 'react';

type Props<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    className?: string;
    size?: Size;
    weight?: FontWeight;
    onClick?: () => void;
};

export function Text<T extends React.ElementType = 'p'>({
    as,
    children,
    className,
    onClick,
    weight = 'regular',
    size = 's',
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
    const Tag = as || 'p';
    const sizeSelector = `size_${size}`;
    console.log(sizeSelector);

    return (
        <Tag
            className={clsx([
                styles[`size_${size}`],
                styles[weight],
                className,
            ])}
            onClick={onClick}
        >
            {children}
        </Tag>
    );
}
