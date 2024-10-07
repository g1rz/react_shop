import React from 'react';
import { ChangeEvent } from 'react';

import styles from './TextField.module.scss';
import clsx from 'clsx';

export type TextFieldProps = {
    value: string;
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    placeholder?: string;
    className?: string;
    type?: string;
    name?: string;
    id?: string;
    disabled?: boolean;
};

export function TextField({
    value,
    onChange,
    placeholder,
    className,
    type = 'text',
    name,
    id,
    disabled,
}: TextFieldProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx([styles.input, className])}
            name={name}
            id={id}
            disabled={disabled}
        />
    );
}

export default TextField;
