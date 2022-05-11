import { StyleSheet } from "react-native";

import { ThemeTypes } from "../../theme";

export function styles(theme: ThemeTypes) {
	return StyleSheet.create({
		container: {},
		text: {
			fontSize: 12,
			color: theme.colors.text_secondary,
			fontFamily: theme.fonts.medium,
		},
	});
}
