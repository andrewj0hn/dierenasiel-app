import {toggleSidebar} from "../../actions/menu";

export default dispatch => {
	console.log("dispatch");
	return {
		onMenuButtonClick: () => {
			console.log("onMenuButtonClick");
			return dispatch(toggleSidebar());
		}
	}
}
