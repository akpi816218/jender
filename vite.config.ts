import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				id: 'app.is-an.jenderizer',
				name: 'Jenderizer',
				short_name: 'Jenderizer',
				start_url: '/jenderizer/',
				display: 'standalone',
				display_override: ['window-controls-overlay'],
				background_color: '#010101',
				lang: 'en',
				scope: '/',
				description: 'Random gender die rolls!',
				screenshots: [
					{
						src: '/jenderizer/screenshot-narrow-light.png',
						sizes: '412x915',
						form_factor: 'narrow',
						type: 'image/png'
					},
					{
						src: '/jenderizer/screenshot-narrow-dark.png',
						sizes: '412x915',
						form_factor: 'narrow',
						type: 'image/png'
					},
					{
						src: '/jenderizer/screenshot-wide-dark.png',
						sizes: '1024x768',
						form_factor: 'wide',
						type: 'image/png'
					},
					{
						src: '/jenderizer/screenshot-wide-light.png',
						sizes: '1024x768',
						form_factor: 'wide',
						type: 'image/png'
					}
				],
				theme_color: '#9D57D2',
				orientation: 'natural',
				categories: ['entertainment']
			}
		})
	],
	base: '/jenderizer/',
	root: 'src',
	appType: 'spa',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src', 'index.html')
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(join(__dirname, 'src'))
		}
	},
	publicDir: 'public'
});
