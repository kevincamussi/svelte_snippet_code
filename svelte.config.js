import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html' // Usado para SPA (Single Page Application)
		}),
		paths: {
			base: process.env.BASE_PATH || '/svelte_snippet_code'
		}
	}
};

export default config;