import { StyleSheet } from "react-native";

import { ThemeTypes } from "../../theme";

export function styles(theme: ThemeTypes) {
	return StyleSheet.create({
		container: {
			alignItems: "center",
		},
		title: {
			fontSize: 20,
			color: theme.colors.text_primary,
			fontFamily: theme.fonts.medium,
			marginBottom: 32,
		},
		options: {
			width: "100%",
			marginBottom: 48,
			flexDirection: "row",
			justifyContent: "center",
		},
	});
}
