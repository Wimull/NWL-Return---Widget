import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import {
	View,
	TextInput,
	Image,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";
import { FeedbackType } from "../widget";
import { ScreenshotButton } from "../screenshotButton";
import { Button } from "../button";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { captureScreen } from "react-native-view-shot";
import { api } from "../../libs/api";
import * as FileSystem from "expo-file-system";

interface FormProps extends TouchableOpacityProps {
	feedbackType: FeedbackType;
	onFeedbackReset: () => void;
	onFeedbackSent: (type: boolean) => void;
}

export function Form({
	feedbackType,
	onFeedbackReset,
	onFeedbackSent,
	...rest
}: FormProps) {
	const { title, image } = feedbackTypes[feedbackType];

	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [comment, setComment] = useState("");

	function handleScreenshot() {
		captureScreen({
			format: "png",
			quality: 0.8,
		})
			.then((uri) => setScreenshot(uri))
			.catch((error) => console.log(error));
	}

	function handleScreenshotRemove() {
		setScreenshot(null);
	}

	async function handleSendFeedback() {
		if (loading) return;
		const screenshotBase64 =
			screenshot &&
			FileSystem.readAsStringAsync(screenshot, { encoding: "base64" });
		setLoading(true);

		try {
			await api.post("feedbacks", {
				type: feedbackType,
				screenshot: `data:image/png;base64, ${screenshotBase64}`,
				comment,
			});
			setLoading(false);
			onFeedbackSent(true);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => {
						onFeedbackReset();
					}}
					{...rest}
				>
					<ArrowLeft
						size={24}
						weight="bold"
						color={theme.colors.text_secondary}
					/>
				</TouchableOpacity>

				<View style={styles.titleContainer}>
					<Image source={image} style={styles.titleImage} />
					<Text style={styles.titleText}>{title}</Text>
				</View>
			</View>
			<TextInput
				multiline={true}
				style={styles.input}
				autoCorrect={false}
				placeholder={"Deixe o seu feedback..."}
				placeholderTextColor={theme.colors.text_secondary}
				onChangeText={setComment}
			/>

			<View style={styles.footer}>
				<ScreenshotButton
					onTakeShot={handleScreenshot}
					onRemoveShot={handleScreenshotRemove}
					screenshot={screenshot}
				/>
				<Button onPress={handleSendFeedback} isLoading={loading} />
			</View>
		</View>
	);
}
