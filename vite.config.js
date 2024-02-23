import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                webp: {
                    // https://sharp.pixelplumbing.com/api-output#webp
                    lossless: true,
                },
            }),
        ],
    };
});