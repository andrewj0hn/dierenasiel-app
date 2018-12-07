// @flow
import type { Action } from '../types';
import type { MenuIsOpen } from '../types/menu';

const menu = (state: MenuIsOpen = { menuIsOpen: false }, action: Action) => {
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
