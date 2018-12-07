// @flow
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  SIDEBAR, CATS, DOGS, CONTACT, SETTINGS,
} from '../../constants/Strings';

const Sidebar = ({ sidebarIsOpen }) => {
  console.log('sidebarIsOpen', sidebarIsOpen);
  return (
    <View style={[styles.container, { width: sidebarIsOpen ? 250 : 0 }]}>
      <Text>{SIDEBAR}</Text>
      <Text>{CATS}</Text>
      <Text>{DOGS}</Text>
      <Text>{CONTACT}</Text>
      <Text>{SETTINGS}</Text>
    </View>
  );
};

Sidebar.propTypes = {
  sidebarIsOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
  sidebarIsOpen: false,
};

export default Sidebar;
