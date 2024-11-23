/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontSize: {
			xs: ["12px", "16px"],
			sm: ["14px", "20px"],
			base: ["16px", "19.5px"],
			lg: ["18px", "21.94px"],
			xl: ["20px", "24.38px"],
			"2xl": ["24px", "29.26px"],
			"3xl": ["28px", "50px"],
			"4xl": ["48px", "58px"],
			"8xl": ["96px", "106px"],
		},
		extend: {
			fontFamily: {
				inter: ["Inter", "serif"],
			},
			colors: {
				"primary-red": "#A41045",
				"secondary-violet": "#892066",
				"tertiary-blue": "#18457C",
				"primary-dark": "#0A0C10",
				"light-dark": "#424345",
				"dark-grey": "#7d7e80",
				"blue-grey": "#95A1AD",
				"pink-grey": "#9b8595",
				gray: "#AEAEAE",
				"light-grey": "#d8d8d8",
				white: "#ffffff",
			},
			boxShadow: {
				"3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
			},
			screens: {
				wide: "1440px",
			},
			backgroundImage: {
				gradient: "url('assets/images/hero_gradient.svg')",
				"text-gradient":
					"linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0.38) 100%)",
			},
			backgroundColor: {
				backgroundGradient:
					"background: linear-gradient(180deg, #0c0c1d, #111132)",
				backgroundCard: "linear-gradient(to bottom, #58324A 40%, #5E3F60 100%)",
			},
			stroke: {
				transparent: "linear-gradient(to bottom, #FFFFFF, #999999)",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				// Gradient zaczyna się od 75% wysokości
				".mask-gradient-75": {
					"-webkit-mask-image":
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)",
					"mask-image":
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)",
					"-webkit-mask-size": "100% 100%",
					"mask-size": "100% 100%",
					"-webkit-mask-repeat": "no-repeat",
					"mask-repeat": "no-repeat",
				},
				// Gradient zaczyna się od 50% wysokości
				".mask-gradient-50": {
					"-webkit-mask-image":
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
					"mask-image":
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
					"-webkit-mask-size": "100% 100%",
					"mask-size": "100% 100%",
					"-webkit-mask-repeat": "no-repeat",
					"mask-repeat": "no-repeat",
				},
			});
		},
		"@tailwindcss/forms",
		"@tailwindcss/typography",
	],
};
