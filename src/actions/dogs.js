import * as types from "../constants/ActionTypes"

export const startFetchAllDogs = {
	type: types.START_FETCH_ALL_DOGS,
}

export const receiveAllDogs = data => ({
	type: types.RECEIVE_ALL_DOGS,
	data,
})

export function fetchAllDogs() {
	return (dispatch, getState) => {
		dispatch(startFetchAllDogs);

		console.log("get all dogs");
		const dogs = [];

		return dispatch(receiveAllDogs(dogs));
	}
}

