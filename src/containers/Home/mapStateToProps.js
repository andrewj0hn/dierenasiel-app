// @flow
import type { State } from '../../types';

export default (state: State) => {
  console.log('state', state);
  return {
    ...state.menu, ...state.featuredArticles,
  };
};
