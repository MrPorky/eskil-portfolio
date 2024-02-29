import { resolve } from 'path';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	resolve: {
		alias: {
			'~': resolve(__dirname, '.')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
