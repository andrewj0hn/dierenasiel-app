// @flow
import type { State } from '../types';

export default ({
  sideMenu, featuredArticles, dogs, cats,
}: State) => ({
  ...sideMenu,
  ...featuredArticles,
  ...dogs,
  ...cats,
});
