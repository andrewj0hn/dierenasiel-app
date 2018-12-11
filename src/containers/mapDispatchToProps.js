// @flow
import { Dispatch } from 'redux';
import { StackActions } from 'react-navigation';
import { toggleSideMenu } from '../actions/sideMenu';
import { fetchFeaturedArticles } from '../actions/featuredArticles';
import { fetchDogs } from '../actions/dogs';
import { fetchCats } from '../actions/cats';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchFeaturedArticles: () => {
    dispatch(fetchFeaturedArticles());
  },
  fetchDogs: () => {
    dispatch(fetchDogs());
  },
  fetchCats: () => {
    dispatch(fetchCats());
  },
  onMenuButtonPress: () => {
    dispatch(toggleSideMenu());
  },
  onSideMenuItemPress: async (screen: string) => {
    try {
      dispatch(toggleSideMenu());

      const replaceAction = StackActions.replace({ routeName: screen });
      await dispatch(replaceAction);
    } catch (e) {
      console.log(e);
    }
  },
});

export default mapDispatchToProps;
