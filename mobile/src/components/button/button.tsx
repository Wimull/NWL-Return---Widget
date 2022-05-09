import React from "react";
import {
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	ActivityIndicator,
} from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
	isLoading: boolean;
	disabled: boolean;
}

export function Button({ isLoading, disabled, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			style={{ ...styles.container, opacity: disabled ? 0.5 : 1 }}
			disabled={disabled}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator color={theme.colors.text_on_brand_color} />
			) : (
				<Text style={styles.title}>Enviar Feedback</Text>
			)}
		</TouchableOpacity>
	);
}
