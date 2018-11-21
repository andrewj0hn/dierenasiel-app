import {
	START_FETCH_ALL_CATS,
	RECEIVE_ALL_CATS,
} from "../constants/ActionTypes";

export default function cats(state = {
	cats: [],
	fetching: false,
}, action) {
	switch (action.type) {
		case START_FETCH_ALL_CATS:
			return Object.assign(state, {fetching: true});
		case RECEIVE_ALL_CATS:
			return Object.assign(state, {fetching: false});
		default:
			return state;
	}
}