/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		color: {
			'marron': '#d97706',
			'blanco': '#ffffff',
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
            }
		},
		
	},
	plugins: [],
}
