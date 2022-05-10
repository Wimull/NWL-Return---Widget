import { useState } from "react";
import { Widget } from "./components";
import { DarkMode } from "./components/darkMode/darkMode";

export function App() {
	const [isDarkModeOn, setIsDarkModeOn] = useState(false);

	function toggleDarkMode() {
		setIsDarkModeOn(!isDarkModeOn);
	}

	return (
		<div
			className={`${
				isDarkModeOn
					? ` text-text-primary-100  bg-slate-500 `
					: " text-text-primary-500 bg-[#09090a] dark"
			}`}
		>
			<DarkMode
				toggleDarkMode={toggleDarkMode}
				weight={isDarkModeOn ? "bold" : "fill"}
			/>
			<Widget />
		</div>
	);
}
