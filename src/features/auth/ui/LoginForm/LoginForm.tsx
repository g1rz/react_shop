import React from 'react';
import { Button, Text, TextField } from '~/shared/ui';
import styles from './LoginForm.module.scss';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../api/authApi';
import { setUser } from '../../model/authSlice';
import { useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export function LoginForm() {
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const dispatch = useDispatch();
    const [login, { isLoading, isError }] = useLoginMutation();
    const navigate = useNavigate();

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = userLogin;
        const password = userPassword;

        try {
            const user = await login({ username, password }).unwrap();
            localStorage.setItem('token', user.accessToken);
            dispatch(setUser(user));
            navigate('/');
        } catch (error) {
            const err = error as FetchBaseQueryError;

            if (
                err.data &&
                typeof err.data === 'object' &&
                'message' in err.data
            ) {
                setErrorText((err.data as { message: string }).message);
            } else {
                setErrorText('An unknown error occurred');
            }
        }
    };

    return (
        <form className={styles.loginForm} onSubmit={handleLogin}>
            <TextField
                value={userLogin}
                placeholder="Login"
                onChange={(e) => setUserLogin(e.target.value)}
                disabled={isLoading}
            />

            <TextField
                value={userPassword}
                placeholder="Password"
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
                disabled={isLoading}
            />

            <Button type="submit" disabled={isLoading}>
                {!isLoading && <>Sign in</>}
                {isLoading && <>Loading...</>}
            </Button>
            {isError && (
                <Text size="l" color="orange" align="center">
                    {errorText}
                </Text>
            )}
        </form>
    );
}
