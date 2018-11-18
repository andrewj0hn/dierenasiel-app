import {
	FETCH_DOGS,
	RECEIVE_DOGS,
} from "../actions/dogs"

export default function dogs(state = {
	dogs: [],
	fetching: false,
}, action) {
	switch (action.type) {
		case FETCH_DOGS:
			return Object.assign(state, {fetching: true});
		case RECEIVE_DOGS:
			return Object.assign(state, {fetching: false});
		default:
			return state;
	}
}