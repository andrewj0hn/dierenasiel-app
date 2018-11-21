/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import {View, StatusBar} from 'react-native';
import StatusBarBackground from "./components/StatusBarBackground";
import MenuButton from "./components/MenuButton";

import styles from "./styles";

const middlewares = compose(applyMiddleware(thunk, logger));
const store = createStore(reducers, undefined, middlewares);

console.log("store", store.getState());

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor="blue"
					barStyle="light-content"
				/>
				<View style={styles.screen}>
					<StatusBarBackground />
					<MenuButton />
				</View>
			</View>
		);
	}
}
