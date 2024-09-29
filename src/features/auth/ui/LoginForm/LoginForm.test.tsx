import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { useLoginMutation } from '../../api/authApi';

import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../api/authApi', () => ({
    useLoginMutation: vi.fn(),
}));

vi.mock('react-redux', () => ({
    useDispatch: vi.fn(),
}));

describe('LoginForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the component', () => {
        (useLoginMutation as ReturnType<typeof vi.fn>).mockReturnValue([
            vi.fn(),
            { isLoading: false, isError: false },
        ]);
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>,
        );

        expect(screen.getByPlaceholderText('Login')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Sign in')).toBeInTheDocument();
        expect(
            screen.queryByText('An unknown error occurred'),
        ).not.toBeInTheDocument();
    });

    it('should update input fields', () => {
        (useLoginMutation as ReturnType<typeof vi.fn>).mockReturnValue([
            vi.fn(),
            { isLoading: false, isError: false },
        ]);
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>,
        );

        fireEvent.change(screen.getByPlaceholderText('Login'), {
            target: { value: 'testuser' },
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: { value: 'testpassword' },
        });

        expect(screen.getByPlaceholderText('Login')).toHaveValue('testuser');
        expect(screen.getByPlaceholderText('Password')).toHaveValue(
            'testpassword',
        );
    });
});
