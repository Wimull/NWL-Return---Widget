import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		marginVertical: 16,
	},
	titleContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	titleText: {
		fontSize: 20,
		color: theme.colors.text_primary,
		fontFamily: theme.fonts.medium,
	},
	titleImage: {
		width: 24,
		height: 24,
		marginRight: 8,
	},
	input: {},
	footer: {
		flexDirection: "row",
		marginBottom: 16,
	},
});
