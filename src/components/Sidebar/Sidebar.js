// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {
  CATS, DOGS, CONTACT, PENSION,
} from '../../constants/Strings';

type Props = {
  menuIsOpen: boolean,
};

const defaultProp = {
  menuIsOpen: false,
};

const menuItems = [
  {
    label: DOGS,
    container: 'dogs',
  },
  {
    label: CATS,
    container: 'cats',
  },
  {
    label: PENSION,
    container: 'Pension',
  },
  {
    label: CONTACT,
    container: 'contact',
  },
];

const Sidebar = ({ menuIsOpen }: Props) => (
  <View style={[styles.container, { width: menuIsOpen ? 250 : 0 }]}>
    { menuItems.map(({ label }) => (
      <Text style={styles.label} key={label}>{label}</Text>
    ))}
  </View>
);

Sidebar.defaultProp = defaultProp;

export default Sidebar;
