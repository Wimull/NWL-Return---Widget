import React from "react";
import {
	View,
	TouchableOpacity,
	TouchableOpacityProps,
	Image,
	ImageProps,
	Text,
} from "react-native";
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
	return (
		<TouchableOpacity
			style={styles.container}
			{...rest}
			onPress={() => onTypeChange(type)}
		>
			<Image source={image} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
