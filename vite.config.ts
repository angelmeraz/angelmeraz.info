import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit()
	],
    resolve: {
		alias: {
			// This forces Vite to use the Node-safe fallback bundle instead of the browser bundle during server building
			'isomorphic-dompurify': path.resolve('./node_modules/isomorphic-dompurify/dist/index.js')
		}
	}
});