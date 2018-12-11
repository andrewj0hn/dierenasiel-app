// @flow
import { combineReducers } from 'redux';
import sideMenu from './sideMenu';
import featuredArticles from './featuredArticles';
import dogs from './dogs';
import cats from './cats';
import nav from './navigation';

export default combineReducers({
  nav,
  sideMenu,
  featuredArticles,
  dogs,
  cats,
});
