import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "../themeContext";
import successImg from "../../assets/success.png";
import { Copyright } from "../copyright";
import { styles } from "./styles";

interface SuccessProps {
	onFeedbackReset: () => void;
}

export function Success({ onFeedbackReset }: SuccessProps) {
	return (
		<View style={styles(useContext(ThemeContext)).container}>
			<Image
				source={successImg}
				style={styles(useContext(ThemeContext)).image}
			/>
			<Text style={styles(useContext(ThemeContext)).title}>
				Agradecemos pelo feedback
			</Text>
			<TouchableOpacity
				style={styles(useContext(ThemeContext)).button}
				onPress={onFeedbackReset}
			>
				<Text style={styles(useContext(ThemeContext)).buttonTitle}>
					Quero enviar outro
				</Text>
			</TouchableOpacity>
			<Copyright />
		</View>
	);
}
