import React, {Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import Sidebar from "../components/Sidebar";
import FeaturedArticle from "../components/FeaturedArticle";
import styles from "./styles";

class Home extends Component {
	componentDidMount() {
		console.log("componentDidMount: Home, this.props", this.props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Sidebar/>
				<Text>Home</Text>
				<FeaturedArticle/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log("state", state);
	const {menu} = state;
	return {...menu};
};

export default connect(mapStateToProps)(Home);
