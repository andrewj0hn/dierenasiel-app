// @flow
import { toggleSidebar } from '../../actions/menu';
import type { Dispatch } from '../../types';

export default (dispatch: Dispatch) => {
  console.log('dispatch');
  return {
    onMenuButtonClick: () => {
      console.log('onMenuButtonClick');
      return dispatch(toggleSidebar());
    },
  };
};
