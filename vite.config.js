import * as path from 'path';

import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    resolve: {
        '@': path.resolve(__dirname, './src'),
        '@images': path.resolve(__dirname, './src/assets/images/'),
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