import React from "react";
import {View} from "react-native";
import MenuButton from "../MenuButton";
import HeaderTitle from "../HeaderTitle";
import styles from "./styles";

export default () => (
	<View style={styles.container}>
		<MenuButton/>
		<HeaderTitle/>
	</View>
)