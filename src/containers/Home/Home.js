import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import FeaturedArticle from "../../components/FeaturedArticle";
import PropTypes from "prop-types";
import styles from "./styles";
import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";

const Home = ({sidebarIsOpen, onMenuButtonClick}) => (
	<View style={styles.container}>
		<Header onMenuButtonClick={onMenuButtonClick}/>
		<Sidebar sidebarIsOpen={sidebarIsOpen}/>
		<Text>Home</Text>
		<FeaturedArticle/>
	</View>
);

Home.propTypes = {
	sidebarIsOpen: PropTypes.bool,
	onMenuButtonClick: PropTypes.func,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
