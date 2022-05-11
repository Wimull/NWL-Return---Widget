import { Moon } from "phosphor-react-native";
import React, { useContext, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "../themeContext";

import { styles } from "./styles";

interface DarkModeProps {
	isDarkModeOn: boolean;
	handleToggleDarkMode: () => void;
}

export function DarkMode({
	isDarkModeOn,
	handleToggleDarkMode,
}: DarkModeProps) {
	const theme = useContext(ThemeContext);
	return (
		<TouchableOpacity
			onPress={handleToggleDarkMode}
			style={styles(theme).container}
		>
			<Moon
				size={24}
				weight={isDarkModeOn ? "fill" : "bold"}
				color={theme.colors.text_on_brand_color}
			/>
		</TouchableOpacity>
	);
}
