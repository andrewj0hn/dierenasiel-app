import {StyleSheet} from "react-native";
import {HEADERHEIGHT} from "../../constants/Styles";

export default styles = StyleSheet.create({
	container: {
		height: HEADERHEIGHT,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "grey",
	},
});
