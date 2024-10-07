import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddedControl } from './AddedControl';
import { useAddToCart } from '../../lib/useAddToCart';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('../../lib/useAddToCart', () => ({
    useAddToCart: vi.fn(),
}));

describe('AddedControl', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should disable the plus button when the count reaches the max count', () => {
        (useAddToCart as ReturnType<typeof vi.fn>).mockReturnValue({
            addToCart: vi.fn(),
            isLoading: false,
        });
        render(<AddedControl productId={1} initialCount={10} maxCount={10} />);
        expect(screen.getByLabelText('plus product')).toBeDisabled();
    });

    it('should disable the minus button when the count reaches the min count', () => {
        (useAddToCart as ReturnType<typeof vi.fn>).mockReturnValue({
            addToCart: vi.fn(),
            isLoading: false,
        });
        render(<AddedControl productId={1} initialCount={0} minCount={0} />);
        expect(screen.getByLabelText('minus product')).toBeDisabled();
    });

    it('should disable both buttons when isLoading is true', () => {
        (useAddToCart as ReturnType<typeof vi.fn>).mockReturnValue({
            addToCart: vi.fn(),
            isLoading: true,
        });
        render(<AddedControl productId={1} initialCount={3} />);
        expect(screen.getByLabelText('plus product')).toBeDisabled();
        expect(screen.getByLabelText('minus product')).toBeDisabled();
    });
});
