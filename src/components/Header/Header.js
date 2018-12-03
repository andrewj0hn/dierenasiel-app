import React from "react";
import {View} from "react-native";
import MenuButton from "../../components/MenuButton";
import HeaderTitle from "../../components/HeaderTitle";
import PropTypes from "prop-types";
import styles from "./styles";

const Header = ({onMenuButtonClick}) => {
	console.log("onMenuButtonClick");
	return (
		<View style={styles.container}>
			<MenuButton onPress={onMenuButtonClick}/>
			<HeaderTitle/>
		</View>
	);
};

Header.propTypes = {
	onMenuButtonClick: PropTypes.func,
};

export default Header;
