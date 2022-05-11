import { ArrowLeft } from "phosphor-react-native";
import React, { useContext, useState } from "react";
import {
	View,
	TextInput,
	Image,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { FeedbackType } from "../widget";
import { ScreenshotButton } from "../screenshotButton";
import { Button } from "../button";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { captureScreen } from "react-native-view-shot";
import { api } from "../../libs/api";
import * as FileSystem from "expo-file-system";
import { ThemeContext } from "../themeContext";

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
	const theme = useContext(ThemeContext);
	const { title, image, placeholder } = feedbackTypes[feedbackType];

	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [loadingScreenshot, setLoadingScreenshot] = useState(false);
	const [sendingFeedback, setSendingFeedback] = useState<boolean>(false);
	const [comment, setComment] = useState("");

	async function handleScreenshot() {
		setLoadingScreenshot(true);
		await captureScreen({
			format: "png",
			quality: 0.8,
		})
			.then((uri) => setScreenshot(uri))
			.catch((error) => console.log(error));
		setLoadingScreenshot(false);
	}

	function handleScreenshotRemove() {
		setScreenshot(null);
	}

	async function handleSendFeedback() {
		if (sendingFeedback) return;
		const screenshotBase64 =
			screenshot &&
			FileSystem.readAsStringAsync(screenshot, { encoding: "base64" });
		setSendingFeedback(true);

		try {
			console.log(feedbackType, comment, screenshotBase64);
			await api.post("/feedbacks", {
				type: feedbackType,
				comment,
				screenshot: `data:image/png;base64, ${screenshotBase64}`,
			});
			setSendingFeedback(false);
			onFeedbackSent(true);
		} catch (error) {
			console.error(error);
			setSendingFeedback(false);
		}
	}

	return (
		<View style={styles(theme).container}>
			<View style={styles(theme).header}>
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

				<View style={styles(theme).titleContainer}>
					<Image source={image} style={styles(theme).titleImage} />
					<Text style={styles(theme).titleText}>{title}</Text>
				</View>
			</View>
			<TextInput
				multiline={true}
				style={styles(theme).input}
				autoCorrect={false}
				placeholder={placeholder}
				placeholderTextColor={theme.colors.text_secondary}
				onChangeText={setComment}
			/>

			<View style={styles(theme).footer}>
				<ScreenshotButton
					onTakeShot={handleScreenshot}
					onRemoveShot={handleScreenshotRemove}
					screenshot={screenshot}
					isTakingScreenshot={loadingScreenshot}
				/>
				<Button
					onPress={handleSendFeedback}
					isLoading={sendingFeedback}
					disabled={!comment}
				/>
			</View>
		</View>
	);
}
