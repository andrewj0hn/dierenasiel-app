// @flow
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import styles from './styles';
import { WHITE } from '../../constants/Styles';

type Props = {
  onMenuButtonPress: Function,
};

const MenuButton = ({ onMenuButtonPress }: Props) => (
  <View>
    <TouchableHighlight onPress={onMenuButtonPress} underlayColor={WHITE}>
      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </TouchableHighlight>
  </View>
);

export default MenuButton;
