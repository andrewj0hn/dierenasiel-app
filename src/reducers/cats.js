import {
	FETCH_CATS,
	RECEIVE_CATS,
} from "../actions/cats"

export default function cats(state = {
	cats: [],
	fetching: false,
}, action) {
	switch (action.type) {
		case FETCH_CATS:
			return Object.assign(state, {fetching: true});
		case RECEIVE_CATS:
			return Object.assign(state, {fetching: false});
		default:
			return state;
	}
}