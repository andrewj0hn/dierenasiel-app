// @flow
export type MenuIsOpen = {
  menuIsOpen: boolean,
};

export type MenuState = {
  menuIsOpen: MenuIsOpen,
};

export type MenuAction =
  | { type: 'TOGGLE_MENU' };
