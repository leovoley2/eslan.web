/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',

			// Marca: azul océano de Arena
			brand: {
				50: '#EEF5F8',
				100: '#D6E8EF',
				200: '#AACFDD',
				300: '#73AEC4',
				400: '#3C87A3',
				500: '#146C8E',
				600: '#01577A',
				700: '#074863',
				800: '#0A3D52',
				900: '#082C3B',
				950: '#051C26',
			},
			// Acento: amarillo sol de Arena (usar con moderación)
			accent: {
				50: '#FFF8E6',
				100: '#FFEDBF',
				300: '#FFD166',
				400: '#FFB919',
				500: '#F2A900',
				600: '#C78A00',
				700: '#8A5F00',
			},
			// Fondos cálidos tipo arena
			sand: {
				50: '#FBFAF6',
				100: '#F5F2EA',
				200: '#EAE5D8',
				300: '#D9D1BD',
			},
			// Neutros para texto y bordes
			ink: {
				50: '#F6F7F8',
				100: '#ECEEF0',
				200: '#DCE0E3',
				300: '#BCC3C8',
				400: '#8D979E',
				500: '#66717A',
				600: '#4B555D',
				700: '#363E45',
				800: '#22292F',
				900: '#141A1F',
			},
			success: { 50: '#ECFDF3', 600: '#067647' },
			danger: { 50: '#FEF3F2', 600: '#B42318' },

			// Alias heredados para no romper estilos antiguos
			gray: {
				50: '#F6F7F8',
				100: '#ECEEF0',
				200: '#DCE0E3',
				300: '#BCC3C8',
				400: '#8D979E',
				500: '#66717A',
				600: '#4B555D',
				700: '#363E45',
				800: '#22292F',
				900: '#141A1F',
				950: '#0B0F12',
			},
			'arena-blue': '#01577A',
			'arena-dark': '#0A3D52',
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
				display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
			},
			maxWidth: {
				site: '76rem',
			},
			letterSpacing: {
				eyebrow: '0.14em',
			},
		},
	},
	plugins: [],
}
