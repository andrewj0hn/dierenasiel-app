import React, {Component} from "react";
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import {Platform, View, StyleSheet, NativeModules} from "react-native";
import StatusBar from "./components/StatusBar/StatusBar";
import Header from "./components/Header";
import Home from "./screens/Home";

const {StatusBarManager} = NativeModules;
const middlewares = compose(applyMiddleware(thunk, logger));
const store = createStore(reducers, undefined, middlewares);

console.log("store", store.getState());

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {statusBarHeight: 0};
	}

	componentDidMount() {
		if (Platform.OS == "ios") {
			StatusBarManager.getHeight(statusBar => {
				this.setState({statusBarHeight: statusBar.height});
			});
		}
	}

	render() {
		const {statusBarHeight} = this.state;

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar height={statusBarHeight}/>
					<Header/>
					<Home/>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});