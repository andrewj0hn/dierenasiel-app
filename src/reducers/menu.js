import {
	OPEN_SIDEBAR,
	CLOSE_SIDEBAR,
} from "../constants/ActionTypes";

export default function menu(state = {
	isOpen: false,
}, action) {
	switch (action.type) {
		case OPEN_SIDEBAR:
			return Object.assign(state, {isOpen: true});
		case CLOSE_SIDEBAR:
			return Object.assign(state, {isOpen: false});
		default:
			return state;
	}
}