/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'marron': '#d97706',
			'blanco': '#ffffff',
			'arena-dark': '#835b0a',
			'arena-mid': '#dcb55d',
			'arena-light': '#f8ecbc',
			'arena-blue': '#01577a',
			'arena-cyan': '#4eb2e5',
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
                950: '#030712',
            }
		},
		extend: {
			fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
            },
            fontFamily: {
                'montserrat': ['Montserrat'],
                'bebas-neue': ['Bebas neue'],
            },
            height: {
                '3/4': '75%'
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                }
            }
		},
		
	},
	plugins: [],
}
