// @flow
import { TOGGLE_SIDEBAR } from '../constants/ActionTypes';

export default (state = {
  sidebarIsOpen: false,
}, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      const { sidebarIsOpen } = state;
      return Object.assign({}, state, { sidebarIsOpen: !sidebarIsOpen });
    }
    default:
      return state;
  }
};
