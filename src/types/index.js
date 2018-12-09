// @flow

import type { MenuState, MenuAction } from './menu';

import type { FeaturedArticlesAction, FeaturedArticlesState } from './featuredArticles';

export type ReduxInitAction = { type: '@@INIT' };

export type State = {
  menu: MenuState,
  featuredArticles: FeaturedArticlesState
}

export type Action = ReduxInitAction | MenuAction | FeaturedArticlesAction;
