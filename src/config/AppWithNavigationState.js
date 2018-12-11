// @flow
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { AppNavigator } from '../reducers/navigation';

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(App);
