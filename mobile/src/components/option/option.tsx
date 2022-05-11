import React, { useContext } from "react";
import {
	View,
	TouchableOpacity,
	TouchableOpacityProps,
	Image,
	ImageProps,
	Text,
} from "react-native";
import { ThemeContext } from "../themeContext";
import { FeedbackType } from "../widget";

import { styles } from "./styles";

interface OptionProps extends TouchableOpacityProps {
	title: string;
	image: ImageProps;
	type: FeedbackType;
	onTypeChange: (type: FeedbackType) => void;
}

export function Option({
	title,
	image,
	type,
	onTypeChange,
	...rest
}: OptionProps) {
	const theme = useContext(ThemeContext);
	return (
		<TouchableOpacity
			style={styles(theme).container}
			{...rest}
			onPress={() => onTypeChange(type)}
		>
			<Image source={image} style={styles(theme).image} />
			<Text style={styles(theme).title}>{title}</Text>
		</TouchableOpacity>
	);
}
