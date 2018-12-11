// @flow
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import cats from '../cats';

export const fetchCats = ():ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'REQUEST_CATS' });

  try {
    // const response = await fetch(
    //   'https://facebook.github.io/react-native/movies.json',
    // );
    // const responseJson = await response.json();
    // console.log('responseJson', responseJson);

    dispatch({ type: 'RECEIVED_CATS', payload: cats });
  } catch (error) {
    console.error(error);
  }
};
