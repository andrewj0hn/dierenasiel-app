import React from "react";
import {StatusBar as StatusBarRN, View} from "react-native";
import styles from "./styles";

export default () => (
	<View>
		<StatusBarRN barStyle="light-content"/>
		<View style={styles.statusBarHeight}></View>
	</View>
)
