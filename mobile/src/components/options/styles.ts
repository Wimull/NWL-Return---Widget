import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
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
