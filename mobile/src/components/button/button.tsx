import React, { useContext } from "react";
import {
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	ActivityIndicator,
} from "react-native";
import { ThemeContext } from "../themeContext";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
	isLoading: boolean;
	disabled: boolean;
}

export function Button({ isLoading, disabled, ...rest }: ButtonProps) {
	const theme = useContext(ThemeContext);
	return (
		<TouchableOpacity
			style={{ ...styles(theme).container, opacity: disabled ? 0.5 : 1 }}
			disabled={disabled}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator color={theme.colors.text_on_brand_color} />
			) : (
				<Text style={styles(theme).title}>Enviar Feedback</Text>
			)}
		</TouchableOpacity>
	);
}
