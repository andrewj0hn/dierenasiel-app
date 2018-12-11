import { createStackNavigator } from 'react-navigation';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Home from '../containers/Home';
import Dogs from '../containers/Dogs';
import Cats from '../containers/Cats';
import { BOLD, HEADER_COLOR, WHITE } from '../constants/Styles';

export const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Dogs: { screen: Dogs },
  Cats: { screen: Cats },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: HEADER_COLOR,
    },
    headerTintColor: WHITE,
    headerTitleStyle: {
      fontWeight: BOLD,
    },
    headerBackTitle: null,
  },
});
const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;
