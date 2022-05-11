import { Camera, Trash } from "phosphor-react-native";
import React, { useContext } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { styles } from "../../components/screenshotButton/styles";
import { ThemeContext } from "../themeContext";

interface ScreenshotButtonProps {
	screenshot: string | null;
	onTakeShot: () => void;
	onRemoveShot: () => void;
}

export function ScreenshotButton({
	screenshot,
	onTakeShot,
	onRemoveShot,
}: ScreenshotButtonProps) {
	const theme = useContext(ThemeContext);
	return (
		<TouchableOpacity
			style={styles(theme).container}
			onPress={screenshot ? onRemoveShot : onTakeShot}
		>
			{screenshot ? (
				<View>
					<Image style={styles(theme).image} source={{ uri: screenshot }} />
					<Trash
						size={22}
						color={theme.colors.text_secondary}
						weight="fill"
						style={styles(theme).removeIcon}
					/>
				</View>
			) : (
				<Camera
					size={24}
					color={theme.colors.text_secondary}
					weight="bold"
					style={styles(theme).camera}
				/>
			)}
		</TouchableOpacity>
	);
}
