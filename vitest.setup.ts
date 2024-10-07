import { vi } from 'vitest';

// Мокируем любые SVG файлы с суффиксом ?react
vi.mock('~/shared/ui/Icons/IconMinus/minus.svg?react', () => ({
    default: 'MockedMinusSVG',
}));

vi.mock('~/shared/ui/Icons/IconPlus/plus.svg?react', () => ({
    default: 'MockedPlusSVG',
}));

vi.mock('~/shared/ui/Icons/IconCart/cart.svg?react', () => ({
    default: 'MockedCartSVG',
}));

// Мокаем другие SVG-файлы, если необходимо
vi.mock('*.svg', () => ({
    default: 'MockedSVG',
}));
