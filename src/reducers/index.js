import {combineReducers} from 'redux';
import cats from './cats';
import dogs from './dogs';

export default combineReducers({cats, dogs});