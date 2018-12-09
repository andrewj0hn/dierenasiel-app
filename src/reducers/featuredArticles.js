// @flow

import type { FeaturedArticlesState } from '../types/featuredArticles';
import type { Action } from '../types';

const featuredArticles = (state: FeaturedArticlesState = {
  items: [],
  isFetchingItems: false,
}, action: Action): FeaturedArticlesState => {
  console.log('action', action);
  switch (action.type) {
    case 'REQUEST_FEATURED_ARTICLES':
      return Object.assign({}, state, { isFetchingItems: true });
    case 'RECEIVED_FEATURED_ARTICLES': {
      const { payload } = action;
      console.log('featuredArticlesData', payload);
      return Object.assign({}, state, { items: payload, isFetchingItems: false });
    }
    default:
      return state;
  }
};

export default featuredArticles;
