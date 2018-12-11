// @flow
import type { Action } from '../types';
import type { SideMenuState } from '../types/sideMenu';

const sideMenu = (state: SideMenuState = {
  sideMenuIsOpen: false,
}, action: Action): SideMenuState => {
  switch (action.type) {
    case 'TOGGLE_SIDE_MENU': {
      const { sideMenuIsOpen } = state;
      return Object.assign({}, state, { sideMenuIsOpen: !sideMenuIsOpen });
    }
    default:
      return state;
  }
};

export default sideMenu;
