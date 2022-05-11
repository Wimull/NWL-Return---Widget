import { Text, View } from "react-native";
import { Copyright } from "../copyright";
import { Option } from "../option/";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../widget";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

interface OptionsProps {
	onFeedbackType: (type: FeedbackType) => void;
}

export function Options({ onFeedbackType }: OptionsProps) {
	const theme = useContext(ThemeContext);
	return (
		<View style={styles(theme).container}>
			<Text style={styles(theme).title}>Deixe seu Feedback</Text>
			<View style={styles(theme).options}>
				{Object.entries(feedbackTypes).map(([key, feedback]) => (
					<Option
						key={key}
						type={key as FeedbackType}
						title={feedback.title}
						image={feedback.image}
						onTypeChange={onFeedbackType}
					/>
				))}
			</View>
			<Copyright />
		</View>
	);
}
