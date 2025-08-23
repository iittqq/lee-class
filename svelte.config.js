import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const dev = process.env.NODE_ENV === 'development';
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { adapter: adapter({ fallback: 'index.html' }) },
	paths: {
		base: dev ? '' : '/lee-class', // <-- change to your repo name
		relative: true // makes asset URLs work under subpaths
	}
};

export default config;
