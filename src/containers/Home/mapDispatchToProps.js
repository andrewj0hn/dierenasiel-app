// @flow
import { Dispatch } from 'redux';
import { toggleSidebar } from '../../actions/menu';
import { fetchFeaturedArticles } from '../../actions/featuredArticles';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchFeaturedArticles: () => {
    dispatch(fetchFeaturedArticles());
  },
  onMenuButtonClick: () => {
    dispatch(toggleSidebar());
  },
});

export default mapDispatchToProps;
