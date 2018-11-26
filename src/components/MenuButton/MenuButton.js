import React from "react";
import {View, TouchableHighlight} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const MenuButton = ({onPress}) => (
	<View>
		<TouchableHighlight
			underlayColor="green"
			onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.line}></View>
				<View style={styles.line}></View>
				<View style={styles.line}></View>
			</View>
		</TouchableHighlight>
	</View>
);

MenuButton.propTypes = {
	onPress: PropTypes.func,
};

export default MenuButton;
