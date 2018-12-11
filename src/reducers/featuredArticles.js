// @flow
import type { FeaturedArticlesState } from '../types/featuredArticles';
import type { Action } from '../types';

const featuredArticles = (state: FeaturedArticlesState = {
  featuredArticles: [],
  isFetchingFeaturedArticles: false,
}, action: Action): FeaturedArticlesState => {
  switch (action.type) {
    case 'REQUEST_FEATURED_ARTICLES':
      return Object.assign({}, state, { isFetchingFeaturedArticles: true });
    case 'RECEIVED_FEATURED_ARTICLES': {
      const { payload } = action;
      return Object.assign({}, state, {
        featuredArticles: payload,
        isFetchingFeaturedArticles: false,
      });
    }
    default:
      return state;
  }
};

export default featuredArticles;
