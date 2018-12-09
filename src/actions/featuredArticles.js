// @flow
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import featuredArticles from '../featured_articles';

export const fetchFeaturedArticles = ():ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'REQUEST_FEATURED_ARTICLES' });

  try {
    const response = await fetch(
      'https://facebook.github.io/react-native/movies.json',
    );
    const responseJson = await response.json();
    console.log('responseJson', responseJson);

    dispatch({ type: 'RECEIVED_FEATURED_ARTICLES', payload: featuredArticles.items });
  } catch (error) {
    console.error(error);
  }
};
