// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {
  SIDEBAR, CATS, DOGS, CONTACT, SETTINGS,
} from '../../constants/Strings';

export default ({ sidebarIsOpen }) => {
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
