import React, {Component} from "react";
import {Platform, View, NativeModules} from "react-native";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import StatusBar from "../components/StatusBar/StatusBar";
import reducers from "../reducers";
import Home from "../screens/Home";
import styles from "./styles";

const middlewares = compose(applyMiddleware(thunk, logger));
const store = createStore(reducers, undefined, middlewares);
const {StatusBarManager} = NativeModules;

class App extends Component {
	state = {
		statusBarHeight: 0,
	};

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
					<Home/>
				</View>
			</Provider>
		);
	}
}

export default App;
