import { View } from "react-native";
import { Widget } from "../widget";
import { DarkMode } from "../darkMode";

interface WidgetsProps {
	isDarkModeOn: boolean;
	handleToggleDarkMode: () => void;
}

export function Widgets({ isDarkModeOn, handleToggleDarkMode }: WidgetsProps) {
	return (
		<View style={{ height: "100%" }}>
			<Widget />
			<DarkMode
				isDarkModeOn={isDarkModeOn}
				handleToggleDarkMode={handleToggleDarkMode}
			/>
		</View>
	);
}
