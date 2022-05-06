import { Text, View } from "react-native";
import { Copyright, Option } from "..";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";

export function Options() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Deixe seu Feedback</Text>
			<View style={styles.options}>
				{Object.entries(feedbackTypes).map(([key, feedback]) => (
					<Option key={key} title={feedback.title} image={feedback.image} />
				))}
			</View>
			<Copyright />
		</View>
	);
}
