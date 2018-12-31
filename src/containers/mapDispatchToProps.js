// @flow
import { Dispatch } from 'redux';
import { StackActions, NavigationActions } from 'react-navigation';
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
  onSideMenuItemPress: async (screen: string) => {
    try {
      dispatch(toggleSideMenu());

      const replaceAction = StackActions.replace({ routeName: screen });
      await dispatch(replaceAction);
    } catch (e) {
      console.log(e);
    }
  },
  onAnimalListItemPress: async (animal: Object) => {
    try {
      console.log('animal', animal);
      const navigateAction = NavigationActions.navigate({ routeName: 'Detail', params: animal });
      await dispatch(navigateAction);
    } catch (e) {
      console.log(e);
    }
  },
});

export default mapDispatchToProps;
