import { Camera, Trash } from "phosphor-react-native";
import React, { useContext } from "react";
import { View, TouchableOpacity, Image, ActivityIndicator } from "react-native";

import { styles } from "../../components/screenshotButton/styles";
import { ThemeContext } from "../themeContext";

interface ScreenshotButtonProps {
	screenshot: string | null;
	onTakeShot: () => void;
	onRemoveShot: () => void;
	isTakingScreenshot: boolean;
}

export function ScreenshotButton({
	screenshot,
	onTakeShot,
	onRemoveShot,
	isTakingScreenshot,
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
			) : !isTakingScreenshot ? (
				<Camera
					size={24}
					color={theme.colors.text_secondary}
					weight="bold"
					style={styles(theme).camera}
				/>
			) : (
				<ActivityIndicator color={theme.colors.text_on_brand_color} />
			)}
		</TouchableOpacity>
	);
}
