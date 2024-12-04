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
				"dark-red": "#630727",
				"secondary-violet": "#892066",
				"tertiary-blue": "#18457C",
				"primary-dark": "#0A0C10",
				"light-dark": "#424345",
				"dark-grey": "#7d7e80",
				"blue-grey": "#95A1AD",
				"pink-grey": "#9b8595",
				gray: "#AEAEAE",
				"light-grey": "#d8d8d8",
				white: "#e7e4e4",
			},
			boxShadow: {
				"3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
			},
			screens: {
				wide: "1440px",
				tiny: "440px",
			},
			backgroundImage: {
				gradient: "url('assets/images/hero_gradient.svg')",
				gradient2: "url('assets/images/about_gradient.svg')",
				gradient3: "url('assets/images/skills_gradient.svg')",
				lines: "url('assets/images/lines.svg')",
				"text-gradient":
					"linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0.38) 100%)",
				"background-gradient": "linear-gradient(180deg, #0c0c1d, #111132)",
				"background-card":
					"linear-gradient(to bottom, hsl(296, 31%, 17%,1) 20%, rgba(94, 63, 96, 0) 100%, rgba(10, 12, 16,100%) 100%)",
				"background-form":
					"linear-gradient(to bottom, rgb(88, 50, 74, 40%) 0%, rgb(94, 63, 96, 0) 100%, rgb(10, 12, 16, 1) 100%)",
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
				".mask-gradient-30": {
					"-webkit-mask-image":
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
					"mask-image":
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
					"-webkit-mask-size": "100% 100%",
					"mask-size": "100% 100%",
					"-webkit-mask-repeat": "no-repeat",
					"mask-repeat": "no-repeat",
				},
				".about-header": {
					fontSize: "36px",
					"@screen sm": {
						fontSize: "48px",
						lineHeight: "none",
					},
					"@screen md": {
						fontSize: "68px",
					},
					"@screen xl": {
						fontSize: "var(--tw-text-8xl)", // Tailwind interpretuje 8xl
					},
					fontWeight: "bold",
					lineHeight: "2.5rem", // Dostosowanie
					color: "transparent",
					// backgroundImage: "var(--tw-bg-gradient)",
					backgroundClip: "text",
					textAlign: "left",
					verticalAlign: "middle",
					padding: "1rem",
					position: "relative",
					zIndex: 20,
				},
				// ".border-gradient": {
				// 	position: "relative",
				// 	zIndex: 1,
				// 	background: "linear-gradient(to bottom, #FFFFFF, #999999)",
				// 	WebkitMask: "padding-box",
				// 	mask: "padding-box",
				// 	backgroundClip: "border-box",
				// },
				// aboutGrid: {
				// 	"grid-template-columns": "repeat(9, 5vw)",
				// 	"grid-template-rows": "repeat(4, 5vw)",
				// 	"@screen md": {
				// 		"grid-template-columns": "repeat(9, 8vw)",
				// 		"grid-template-rows": "repeat(4, 88vw)",
				// 	},
				// },
			});
		},
		"@tailwindcss/forms",
		"@tailwindcss/typography",
	],
};
