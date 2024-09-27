import React, { FC, FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export interface CreateIconProps {
    className?: string;
    size?: Size;
}

export function createIcon(
    svgComponent: FunctionComponent<React.SVGProps<SVGSVGElement>>,
) {
    const Icon: FC<CreateIconProps> = ({ className, size = 'l' }) => {
        const classNames = clsx([
            styles.icon,
            styles[`size_${size}`],
            className,
        ]);

        return React.createElement(svgComponent, { className: classNames });
    };

    return Icon;
}
