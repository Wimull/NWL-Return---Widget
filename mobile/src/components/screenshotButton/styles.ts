import { StyleSheet } from "react-native";

import { ThemeTypes } from "../../theme";

export function styles(theme: ThemeTypes) {
	return StyleSheet.create({
		container: {
			position: "relative",
			width: 40,
			height: 40,
			borderRadius: 4,
			backgroundColor: theme.colors.surface_secondary,
			justifyContent: "center",
			alignItems: "center",
			marginRight: 8,
		},
		camera: {},
		removeIcon: {
			position: "absolute",
			bottom: 0,
			right: 0,
		},
		image: {
			width: 40,
			height: 40,
		},
	});
}
