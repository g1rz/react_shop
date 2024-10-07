import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartItem } from './CartItem';
import { useAddToCart } from '../../lib/useAddToCart';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../lib/useAddToCart', () => ({
    useAddToCart: vi.fn(),
}));

describe('CartItem', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the component in non-deleted state', () => {
        (useAddToCart as ReturnType<typeof vi.fn>).mockReturnValue({
            addToCart: vi.fn(),
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <CartItem
                    id={1}
                    title="Test Product"
                    thumbnail="test.jpg"
                    price={100}
                    quantity={2}
                    discountPercentage={10}
                    isDeleted={false}
                />
            </MemoryRouter>,
        );

        expect(screen.getByText('2 item')).toBeInTheDocument();

        expect(screen.getByText('Delete')).toBeInTheDocument();

        expect(
            screen.queryByLabelText('add to cart product'),
        ).not.toBeInTheDocument();
    });

    it('should render the component in deleted state', () => {
        (useAddToCart as ReturnType<typeof vi.fn>).mockReturnValue({
            addToCart: vi.fn(),
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <CartItem
                    id={1}
                    title="Test Product"
                    thumbnail="test.jpg"
                    price={100}
                    quantity={2}
                    discountPercentage={10}
                    isDeleted={true}
                />
            </MemoryRouter>,
        );

        expect(
            screen.getByLabelText('add to cart product'),
        ).toBeInTheDocument();

        expect(screen.queryByText('2 item')).not.toBeInTheDocument();

        expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    });

    it('should call addToCart with correct arguments when "Delete" link is clicked', () => {
        const addToCartMock = vi.fn();
        (useAddToCart as ReturnType<typeof vi.fn>).mockReturnValue({
            addToCart: addToCartMock,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <CartItem
                    id={1}
                    title="Test Product"
                    thumbnail="test.jpg"
                    price={100}
                    quantity={2}
                    discountPercentage={10}
                    isDeleted={false}
                />
            </MemoryRouter>,
        );

        fireEvent.click(screen.getByText('Delete'));

        expect(addToCartMock).toHaveBeenCalledWith({
            productId: 1,
            quantity: 0,
        });
    });

    it('should call addToCart with correct arguments when "add to cart" button is clicked', () => {
        const addToCartMock = vi.fn();
        (useAddToCart as ReturnType<typeof vi.fn>).mockReturnValue({
            addToCart: addToCartMock,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <CartItem
                    id={1}
                    title="Test Product"
                    thumbnail="test.jpg"
                    price={100}
                    quantity={2}
                    discountPercentage={10}
                    isDeleted={true}
                />
            </MemoryRouter>,
        );

        fireEvent.click(screen.getByLabelText('add to cart product'));

        expect(addToCartMock).toHaveBeenCalledWith({
            productId: 1,
            quantity: 1,
        });
    });
});
