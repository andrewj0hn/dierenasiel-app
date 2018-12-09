// @flow
import type { Action } from '../types';
import type { MenuState } from '../types/menu';

const menu = (state: MenuState = { menuIsOpen: false }, action: Action): MenuState => {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      const { menuIsOpen } = state;
      return Object.assign({}, state, { menuIsOpen: !menuIsOpen });
    }
    default:
      return state;
  }
};

export default menu;
