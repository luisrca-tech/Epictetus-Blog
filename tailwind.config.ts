import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		colors: {
			white: 'rgb(var(--white) / <alpha-value>)',
			base: {
				100: 'rgb(var(--100) / <alpha-value>)',
				200: 'rgb(var(--200) / <alpha-value>)',
				300: 'rgb(var(--300) / <alpha-value>)'
			},
			gradient: {
				100: 'rgb(var(--gradient-100) / <alpha-value>)',
				200: 'rgb(var(--gradient-200) / <alpha-value>)'
			}
		},
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)']
			}
		}
	},
	plugins: []
} satisfies Config;
