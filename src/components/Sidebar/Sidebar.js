import React from "react";
import {View, Text} from "react-native";
import styles from "./styles";
import {
	SIDEBAR,
	CATS,
	DOGS,
	CONTACT,
	SETTINGS,
} from "../../constants/Strings";

export default () => (
	<View style={styles.container}>
		<Text>{SIDEBAR}</Text>
		<Text>{CATS}</Text>
		<Text>{DOGS}</Text>
		<Text>{CONTACT}</Text>
		<Text>{SETTINGS}</Text>
	</View>
)
