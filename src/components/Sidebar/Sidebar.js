// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {
  SIDEBAR, CATS, DOGS, CONTACT, SETTINGS,
} from '../../constants/Strings';

type Props = {
  menuIsOpen: boolean,
};

const defaultProp = {
  menuIsOpen: false,
};

const Sidebar = ({ menuIsOpen }: Props) => {
  console.log('menuIsOpen', menuIsOpen);
  return (
    <View style={[styles.container, { width: menuIsOpen ? 250 : 0 }]}>
      <Text>{SIDEBAR}</Text>
      <Text>{CATS}</Text>
      <Text>{DOGS}</Text>
      <Text>{CONTACT}</Text>
      <Text>{SETTINGS}</Text>
    </View>
  );
};

Sidebar.defaultProp = defaultProp;

export default Sidebar;
