import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet/";
import { theme } from "../../theme";
import { styles } from "./styles";
import { Form } from "../form";
import { Options } from "../options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Success } from "../success";

export type FeedbackType = keyof typeof feedbackTypes;

export const Widget: any = gestureHandlerRootHOC(() => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	function handleOpen() {
		bottomSheetRef.current?.expand();
	}

	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

	function handleFeedbackReset() {
		setFeedbackType(null);
		setFeedbackSent(false);
	}

	return (
		<>
			<TouchableOpacity style={styles.button} onPress={handleOpen}>
				<ChatTeardropDots
					size={24}
					weight="bold"
					color={theme.colors.text_on_brand_color}
				/>
			</TouchableOpacity>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={[1, 280]}
				backgroundStyle={styles.modal}
				handleIndicatorStyle={styles.indicator}
			>
				{feedbackSent ? (
					<Success onFeedbackReset={handleFeedbackReset} />
				) : (
					<>
						{feedbackType ? (
							<Form
								feedbackType={feedbackType}
								onFeedbackReset={handleFeedbackReset}
								onFeedbackSent={setFeedbackSent}
							/>
						) : (
							<Options onFeedbackType={setFeedbackType} />
						)}
					</>
				)}
			</BottomSheet>
		</>
	);
});
