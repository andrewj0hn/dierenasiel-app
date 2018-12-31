// @flow
import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Store, AppWithNavigationState } from './config';

const App = () => (
  <Provider store={Store}>
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <AppWithNavigationState />
    </View>
  </Provider>
);

export default App;
