// @flow
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import reducers from '../reducers';

const reduxNavigation = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default createStore(reducers, applyMiddleware(thunk, logger, reduxNavigation));
