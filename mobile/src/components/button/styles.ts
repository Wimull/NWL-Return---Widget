import { StyleSheet } from "react-native";

import { ThemeTypes } from "../../theme";

export function styles(theme: ThemeTypes) {
	return StyleSheet.create({
		container: {
			flex: 1,
			height: 40,
			backgroundColor: theme.colors.brand,
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 4,
		},
		title: {
			fontFamily: theme.fonts.medium,
			fontSize: 20,
			color: theme.colors.text_on_brand_color,
		},
	});
}
