// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FeaturedArticle from '../../components/FeaturedArticle';
import styles from './styles';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

const propTypes = {
  sidebarIsOpen: PropTypes.bool,
  onMenuButtonClick: PropTypes.func,
};

const defaultProps = {
  sidebarIsOpen: false,
  onMenuButtonClick: () => {},
};

const Home = ({ sidebarIsOpen, onMenuButtonClick }) => (
  <View style={styles.container}>
    <Header onMenuButtonClick={onMenuButtonClick} />
    <Sidebar sidebarIsOpen={sidebarIsOpen} />
    <Text>Home __ placeholder</Text>
    <FeaturedArticle />
  </View>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);