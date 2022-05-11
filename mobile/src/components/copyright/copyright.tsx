import { View, Text } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export function Copyright() {
	const theme = useContext(ThemeContext);
	return (
		<View style={styles(theme).container}>
			<Text style={styles(theme).text}> Feito com ♥ </Text>
		</View>
	);
}
