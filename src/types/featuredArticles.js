// @flow
export type Id = number;
export type Title = string;
export type Text = string;
export type Image = string;

export type FeaturedArticle = {
  id: Id,
  title: Title,
  text: Text,
  image: Image
};

export type FeaturedArticles = Array<FeaturedArticle>;

export type IsFetchingFeaturedArticles = boolean;

export type FeaturedArticlesState = {
  featuredArticles: FeaturedArticles,
  isFetchingFeaturedArticles: IsFetchingFeaturedArticles,
};

export type FeaturedArticlesAction =
  | { type: 'FETCH_FEATURED_ARTICLES' }
  | { type: 'REQUEST_FEATURED_ARTICLES' }
  | { type: 'RECEIVED_FEATURED_ARTICLES', payload: FeaturedArticles };
