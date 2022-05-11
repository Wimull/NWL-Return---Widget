import { getBottomSpace } from "react-native-iphone-x-helper";

import { StyleSheet } from "react-native";

import { ThemeTypes } from "../../theme";

export function styles(theme: ThemeTypes) {
	return StyleSheet.create({
		button: {
			width: 48,
			height: 48,
			borderRadius: 24,
			backgroundColor: theme.colors.brand,
			justifyContent: "center",
			alignItems: "center",
			position: "absolute",
			right: 16,
			bottom: 16 + getBottomSpace(),
		},

		indicator: {
			backgroundColor: theme.colors.text_primary,
			width: 56,
			padding: 0,
		},

		modal: {
			backgroundColor: theme.colors.surface_primary,
			paddingBottom: getBottomSpace() + 16,
		},
	});
}
