import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts', // Ссылка на файл настроек для тестов
        globals: true,
        mockReset: true,
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
});
