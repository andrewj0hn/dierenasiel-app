// @flow
import type { SideMenuAction, SideMenuState } from './sideMenu';
import type { FeaturedArticlesAction, FeaturedArticlesState } from './featuredArticles';
import type { DogsState, DogsAction } from './dogs';
import type { CatsState, CatsAction } from './cats';

export type ReduxInitAction = { type: '@@INIT' };

export type State = {
  sideMenu: SideMenuState,
  featuredArticles: FeaturedArticlesState,
  dogs: DogsState,
  cats: CatsState,
}

export type Action =
  ReduxInitAction |
  SideMenuAction |
  FeaturedArticlesAction |
  DogsAction |
  CatsAction;
