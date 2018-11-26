import {combineReducers} from "redux";
import cats from "./cats";
import dogs from "./dogs";
import menu from "./menu";

export default combineReducers({cats, dogs, menu});
