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
					primary: {
						100: "#FFFFFF",
						500: "#18181B",
					},
					secondary: {
						100: "#F4F4F5",
						500: "#27272A",
					},
					"secondary-hover": {
						100: "#E4E4E7",
						500: "#3F3F46",
					},
				},
				stroke: {
					100: "#D4D4D8",
					500: "#52525B",
				},
				tooltip: {
					100: "#27272A",
					500: "#F4F4F5",
				},
				text: {
					primary: {
						100: "#27272A",
						500: "#F4F4F5",
					},
					secondary: {
						100: "#71717A",
						500: "#A1A1AA",
					},
					"on-tooltip": {
						100: "#F4F4F5",
						500: "#27272A",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
	darkMode: "class",
};
