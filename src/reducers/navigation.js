import { createStackNavigator } from 'react-navigation';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Home from '../containers/Home';
import Dogs from '../containers/Dogs';
import Cats from '../containers/Cats';
import Contact from '../containers/Contact';
import Detail from '../containers/Detail';
import Pension from '../containers/Pension';
import { BLACK, BORDER_GREY, REGULAR } from '../constants/Styles';

export const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Dogs: { screen: Dogs },
  Cats: { screen: Cats },
  Detail: { screen: Detail },
  Pension: { screen: Pension },
  Contact: { screen: Contact },
}, {
  defaultNavigationOptions: {
    headerBackTitle: null,
    headerTintColor: BLACK,
    headerStyle: {
      paddingEnd: 5,
      verticalPadding: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: BORDER_GREY,
    },
    headerTitleStyle: {
      fontWeight: REGULAR,
      letterSpacing: 0.4,
    },
  },
});

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;
