module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					300: "#996DFF",
					500: "#8257E5",
				},
				surface: {
					primary: "#18181B",
					secondary: "#27272A",
					"secondary-hover": "#3F3F46",
				},
				stroke: "#52525B",
				tooltip: "#F4F4F5",
				text: {
					primary: "#F4F4F5",
					secondary: "#A1A1AA",
					"on-tooltip": "#27272A",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
