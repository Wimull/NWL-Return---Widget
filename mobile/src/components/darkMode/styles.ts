import { StyleSheet } from "react-native";

import { ThemeTypes } from "../../theme";

export const styles = (theme: ThemeTypes) => {
	return StyleSheet.create({
		container: {
			height: 48,
			width: 48,
			borderRadius: 24,
			backgroundColor: theme.colors.brand,
			justifyContent: "center",
			alignItems: "center",
			position: "absolute",
			top: 32,
			right: 16,
		},
	});
};
