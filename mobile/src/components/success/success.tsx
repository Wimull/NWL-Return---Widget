import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import successImg from "../../assets/success.png";
import { Copyright } from "../copyright";
import { styles } from "./styles";

export function Success() {
	return (
		<View style={styles.container}>
			<Image source={successImg} style={styles.image} />
			<Text style={styles.title}>Agradecemos pelo feedback</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonTitle}>Quero enviar outro</Text>
				<Copyright />
			</TouchableOpacity>
		</View>
	);
}
