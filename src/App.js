// @flow
import React, { Component } from 'react';
import { Platform, View, NativeModules } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './config';
import StatusBar from './components/StatusBar/StatusBar';
import Home from './containers/Home';

const { StatusBarManager } = NativeModules;

type Props = {};
type State = {
  statusBarHeight: number,
};

class App extends Component<Props, State> {
  state = {
    statusBarHeight: 0,
  };

  componentDidMount() {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight((statusBar) => {
        this.setState({ statusBarHeight: statusBar.height });
      });
    }
  }

  render() {
    const { statusBarHeight } = this.state;
    return (
      <Provider store={Store}>
        <View style={{ flex: 1 }}>
          <StatusBar height={statusBarHeight} />
          <Home />
        </View>
      </Provider>
    );
  }
}

export default App;
