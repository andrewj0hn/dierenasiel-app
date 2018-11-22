import React from "react";
import {StatusBar as StatusBarRN, View} from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';

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