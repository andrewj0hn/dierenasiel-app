import React, {Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import Sidebar from "../components/Sidebar";

class Home extends Component {
	componentDidMount() {
		console.log("componentDidMount: Home", this.props);
	}

	render() {
		return (
			<View>
				<Sidebar/>
				<Text>Home</Text>
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