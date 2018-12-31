// @flow
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import MENU_ITEMS from '../../constants/MenuItems';
import { SIDE_MENU_ITEM_HIGHLIGHTED, SIDE_MENU_WIDTH, WHITE } from '../../constants/Styles';

type Props = {
  sideMenuIsOpen: boolean,
  onSideMenuItemPress: Function,
  routeName: string,
};

const defaultProp = {
  menuIsOpen: false,
};

const SideMenu = ({ sideMenuIsOpen, onSideMenuItemPress, routeName }: Props) => (
  <View style={[styles.container, { width: sideMenuIsOpen ? SIDE_MENU_WIDTH : 0 }]}>
    { MENU_ITEMS.map(({ label, screen }) => (
      <TouchableHighlight
        key={label}
        underlayColor={SIDE_MENU_ITEM_HIGHLIGHTED}
        onPress={() => onSideMenuItemPress(screen)}
        style={{ backgroundColor: screen === routeName ? SIDE_MENU_ITEM_HIGHLIGHTED : WHITE }}
      >
        <Text style={styles.label}>{label}</Text>
      </TouchableHighlight>
    ))}
  </View>
);

SideMenu.defaultProp = defaultProp;

export default SideMenu;
