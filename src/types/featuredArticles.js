// @flow
export type Id = number;

export type Text = string;

export type Image = string;

export type FeaturedArticle = {
  id: Id,
  text: Text,
  image: Image
};

export type FeaturedArticles = Array<FeaturedArticle>;

export type IsFetchingItems = boolean;

export type FeaturedArticlesState = {
  items: FeaturedArticles,
  isFetchingItems: IsFetchingItems,
};

export type FeaturedArticlesAction =
  | { type: 'FETCH_FEATURED_ARTICLES' }
  | { type: 'REQUEST_FEATURED_ARTICLES' }
  | { type: 'RECEIVED_FEATURED_ARTICLES', payload: FeaturedArticles };
