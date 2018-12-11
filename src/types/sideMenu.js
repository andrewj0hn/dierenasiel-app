// @flow
export type SideMenuIsOpen = boolean;

export type SideMenuState = {
  sideMenuIsOpen: SideMenuIsOpen,
};

export type SideMenuAction =
  | { type: 'TOGGLE_SIDE_MENU' };
