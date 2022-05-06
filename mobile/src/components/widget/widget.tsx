import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import React, { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet/";
import { theme } from "../../theme";
import { styles } from "./styles";
import { Options } from "../options";

export const Widget: any = gestureHandlerRootHOC(() => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	function handleOpen() {
		bottomSheetRef.current?.expand();
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
				<Options />
			</BottomSheet>
		</>
	);
});
