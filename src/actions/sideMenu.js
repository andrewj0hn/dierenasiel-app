// @flow
import type { SideMenuAction } from '../types/sideMenu';

export const toggleSideMenu = (): SideMenuAction => ({
  type: 'TOGGLE_SIDE_MENU',
});
