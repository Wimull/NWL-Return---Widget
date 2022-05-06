import { Text, View } from "react-native";
import { Copyright } from "../copyright";
import { Option } from "../option/";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../widget";

interface OptionsProps {
	onFeedbackType: (type: FeedbackType) => void;
}

export function Options({ onFeedbackType }: OptionsProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Deixe seu Feedback</Text>
			<View style={styles.options}>
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
