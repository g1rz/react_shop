import React from 'react';
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
    | 'gray900'
    | 'currentColor';

export type TextProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    className?: string;
    size?: 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
    weight?: 'bold' | 'semibold' | 'regular' | 'medium';
    color?: Colors;
    align?: 'left' | 'center' | 'right';
    onClick?: () => void;
};

export function Text<T extends React.ElementType = 'p'>({
    as,
    children,
    className,
    onClick,
    weight = 'regular',
    color = 'currentColor',
    size = 's',
    align = 'left',
    ...props
}: TextProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
    const Tag = as || 'p';

    return (
        <Tag
            className={clsx([
                styles.text,
                styles[`size_${size}`],
                styles[weight],
                styles[color as string],
                styles[align],
                className,
            ])}
            onClick={onClick}
            {...props}
        >
            {children}
        </Tag>
    );
}
