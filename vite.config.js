import { defineConfig } from 'vite';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    resolve: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './public/assets/'),
    },
    plugins: [
        ViteImageOptimizer({
            webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true,
            },
        }),
    ],
});