import * as types from "../constants/ActionTypes";

const startFetchAllCats = {
	type: types.START_FETCH_ALL_CATS,
}

const receiveAllCats = data => ({
	type: types.RECEIVE_ALL_CATS,
	data,
})

export function fetchAllCats() {
	return (dispatch, getState) => {
		dispatch(startFetchAllCats);

		console.log("get all cats");
		const cats = [];

		return dispatch(receiveAllCats(cats));
	}
}

