// @flow
export type MenuIsOpen = boolean;

export type MenuState = {
  menuIsOpen: MenuIsOpen,
};

export type MenuAction =
  | { type: 'TOGGLE_MENU' };
