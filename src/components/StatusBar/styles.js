import {StyleSheet, Platform} from "react-native";

export default styles = StyleSheet.create({
	statusBarHeight: {
		height: (Platform.OS == "ios") ? 18 : 0,
		backgroundColor: "green",
	},
});