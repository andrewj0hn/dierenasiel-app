// @flow
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import SideMenu from '../../components/SideMenu';
import FeaturedArticle from '../../components/FeaturedListItem';
import styles from '../styles';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import { HOMEPAGE_TITLE } from '../../constants/Strings';
import { keyExtractor, listFooterComponent } from '../helpers';
import AppIcon from '../../components/AppIcon/AppIcon';
import MenuButton from '../../components/MenuButton';
import Store from '../../config/Store';
import { toggleSideMenu } from '../../actions/sideMenu';

type Props = {
  navigation: Object,
  featuredArticles: [],
  isFetchingFeaturedArticles: false,
  sideMenuIsOpen: false,
  onMenuButtonPress: Function,
  onSideMenuItemPress: Function,
  fetchFeaturedArticles: Function,
};

class Home extends Component<Props> {
  static navigationOptions = {
    title: HOMEPAGE_TITLE,
    headerLeft: <AppIcon />,
    headerRight: <MenuButton onMenuButtonPress={() => Store.dispatch(toggleSideMenu())} />,
  };

  componentDidMount() {
    const { fetchFeaturedArticles } = this.props;
    fetchFeaturedArticles();
  }

  renderItem = ({ item }) => (
    <FeaturedArticle {...item} />
  );

  render() {
    const {
      navigation, featuredArticles, sideMenuIsOpen, onSideMenuItemPress,
    } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu
          sideMenuIsOpen={sideMenuIsOpen}
          onSideMenuItemPress={onSideMenuItemPress}
          routeName={navigation.state.routeName}
        />
        <FlatList
          data={featuredArticles}
          style={styles.content}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          ListFooterComponent={listFooterComponent}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
