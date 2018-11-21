import React, {Component} from "react";
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import {View, StyleSheet} from "react-native";
import StatusBar from "./components/StatusBar/StatusBar";
import Header from "./components/Header";
import Home from "./screens/Home";

const middlewares = compose(applyMiddleware(thunk, logger));
const store = createStore(reducers, undefined, middlewares);

console.log("store", store.getState());

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar/>
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