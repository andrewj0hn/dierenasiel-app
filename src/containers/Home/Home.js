// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FeaturedArticle from '../../components/FeaturedArticle';
import styles from './styles';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

type Props = {
  menuIsOpen: boolean,
  onMenuButtonClick: () => any,
};

const defaultProp = {
  menuIsOpen: false,
};

const Home = ({ menuIsOpen, onMenuButtonClick }: Props) => (
  <View style={styles.container}>
    <Header onMenuButtonClick={onMenuButtonClick} />
    <Sidebar menuIsOpen={menuIsOpen} />
    <Text>Home __ placeholder</Text>
    <FeaturedArticle />
  </View>
);

Home.defaultProp = defaultProp;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
