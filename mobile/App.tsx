import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { DarkMode, Widget } from "./src/components";
import { Themes } from "./src/theme";
import AppLoading from "expo-app-loading";
import { ThemeContext } from "./src/components";
import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
} from "@expo-google-fonts/inter";
import { createContext, useEffect, useRef, useState } from "react";
import { Widgets } from "./src/components/widgets/widgets";

export default function App() {
	const isDarkModeOn = useRef(false);
	const [theme, setTheme] = useState(Themes());
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
	});

	function handleToggleDarkMode() {
		isDarkModeOn.current = !isDarkModeOn.current;
		setTheme(Themes(isDarkModeOn.current));
	}

	if (!fontsLoaded) return <AppLoading />;

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: theme.colors.background,
			}}
		>
			<StatusBar
				style={isDarkModeOn.current ? "dark" : "light"}
				backgroundColor="transparent"
				translucent
			/>
			<ThemeContext.Provider value={theme}>
				<Widgets
					isDarkModeOn={isDarkModeOn.current}
					handleToggleDarkMode={handleToggleDarkMode}
				/>
			</ThemeContext.Provider>
		</View>
	);
}
