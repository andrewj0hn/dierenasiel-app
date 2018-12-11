// @flow
import type { DogsState } from '../types/dogs';
import type { Action } from '../types';

const dogs = (state: DogsState = {
  dogs: [],
  isFetchingDogs: false,
}, action: Action): DogsState => {
  switch (action.type) {
    case 'REQUEST_DOGS':
      return Object.assign({}, state, { isFetchingDogs: true });
    case 'RECEIVED_DOGS': {
      const { payload } = action;
      return Object.assign({}, state, {
        dogs: payload,
        isFetchingDogs: false,
      });
    }
    default:
      return state;
  }
};

export default dogs;
