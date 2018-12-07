// @flow
import type { MenuAction } from '../types/menu';

export const toggleSidebar = (): MenuAction => ({
  type: 'TOGGLE_MENU',
});
