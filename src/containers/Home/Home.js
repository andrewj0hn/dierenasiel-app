// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FeaturedArticle from '../../components/FeaturedArticle';
import styles from './styles';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

type Props = {
  menuIsOpen: boolean,
  items: any,
  isFetchingItems: boolean,
  onMenuButtonClick: () => any,
  fetchFeaturedArticles: () => any,
};

class Home extends Component<Props> {
  static defaultProps = {
    menuIsOpen: false,
    items: [],
    isFetchingItems: false,
  };

  componentDidMount() {
    const { fetchFeaturedArticles } = this.props;
    fetchFeaturedArticles();
  }

  render() {
    const {
      menuIsOpen, onMenuButtonClick, items, isFetchingItems,
    } = this.props;
    console.log('items', items);
    console.log('isFetchingItems', isFetchingItems);
    return (
      <View style={styles.container}>
        <Header onMenuButtonClick={onMenuButtonClick} />
        <Sidebar menuIsOpen={menuIsOpen} />
        <View style={styles.content}>
          { items.map(featuredArticle => (
            <FeaturedArticle key={featuredArticle.id} {...featuredArticle} />
          ))}
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
