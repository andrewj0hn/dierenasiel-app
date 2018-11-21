import React from "react";
import {View, TouchableHighlight} from "react-native";
import styles from "./styles";

export default () => {
	return (
		<TouchableHighlight onPress={() => console.log("onMenuButtonPress")}>
			<View style={styles.container}>
				<View style={styles.line}></View>
				<View style={styles.line}></View>
				<View style={styles.line}></View>
			</View>
		</TouchableHighlight>
	);
}