// @flow
import { combineReducers } from 'redux';
import menu from './menu';
import featuredArticles from './featuredArticles';

export default combineReducers({ menu, featuredArticles });
