// @flow
import type { CatsState } from '../types/cats';
import type { Action } from '../types';

const cats = (state: CatsState = {
  cats: [],
  isFetchingCats: false,
}, action: Action): CatsState => {
  switch (action.type) {
    case 'REQUEST_CATS':
      return Object.assign({}, state, { isFetchingCats: true });
    case 'RECEIVED_CATS': {
      const { payload } = action;
      return Object.assign({}, state, {
        cats: payload,
        isFetchingCats: false,
      });
    }
    default:
      return state;
  }
};

export default cats;
