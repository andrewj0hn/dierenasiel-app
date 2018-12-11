// @flow
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import dogs from '../dogs';

export const fetchDogs = ():ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'REQUEST_DOGS' });

  try {
    // const response = await fetch(
    //   'https://facebook.github.io/react-native/movies.json',
    // );
    // const responseJson = await response.json();
    // console.log('responseJson', responseJson);

    dispatch({ type: 'RECEIVED_DOGS', payload: dogs });
  } catch (error) {
    console.error(error);
  }
};
