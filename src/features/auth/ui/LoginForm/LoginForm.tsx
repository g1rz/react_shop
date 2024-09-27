import { Button, TextField } from '~/shared/ui';
import styles from './LoginForm.module.scss';
import { useState } from 'react';

export function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={styles.loginForm}>
            <TextField
                value={login}
                placeholder="Login"
                onChange={(e) => setLogin(e.target.value)}
            />

            <TextField
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />

            <Button>Sign in</Button>
        </form>
    );
}
