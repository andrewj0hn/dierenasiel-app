// @flow
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import SideMenu from '../../components/SideMenu';
import FeaturedArticle from '../../components/FeaturedArticle';
import styles from '../styles';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import { HOMEPAGE_TITLE } from '../../constants/Strings';
import MenuButton from '../../components/MenuButton';
import { keyExtractor, listFooterComponent } from '../helpers';

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
  static navigationOptions = ({ navigation }) => {
    const onMenuButtonPress = navigation.getParam('onMenuButtonPress');
    return {
      title: HOMEPAGE_TITLE,
      headerLeft: (
        <MenuButton onMenuButtonPress={onMenuButtonPress} />
      ),
    };
  };

  componentDidMount() {
    const { fetchFeaturedArticles, navigation, onMenuButtonPress } = this.props;
    fetchFeaturedArticles();
    navigation.setParams({ onMenuButtonPress });
  }

  renderItem = ({ item }) => (
    <FeaturedArticle {...item} />
  );

  render() {
    const { featuredArticles, sideMenuIsOpen, onSideMenuItemPress } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu sideMenuIsOpen={sideMenuIsOpen} onSideMenuItemPress={onSideMenuItemPress} />
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
