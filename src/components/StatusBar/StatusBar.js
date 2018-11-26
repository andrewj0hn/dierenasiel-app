import React from "react";
import {StatusBar as StatusBarRN, View} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles";

const StatusBar = ({height}) => (
	<View>
		<StatusBarRN barStyle="light-content"/>
		<View style={[styles.statusBarHeight, {height}]}></View>
	</View>
);

StatusBar.propTypes = {
	height: PropTypes.number,
};

export default StatusBar;
