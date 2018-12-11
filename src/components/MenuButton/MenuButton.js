// @flow
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import styles from './styles';
import { HEADER_COLOR } from '../../constants/Styles';

type Props = {
  onMenuButtonPress: Function,
};

const MenuButton = ({ onMenuButtonPress }: Props) => (
  <View>
    <TouchableHighlight underlayColor={HEADER_COLOR} onPress={onMenuButtonPress}>
      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </TouchableHighlight>
  </View>
);

export default MenuButton;
