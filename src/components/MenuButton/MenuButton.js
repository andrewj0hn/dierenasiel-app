// @flow
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import styles from './styles';

type Props = {
  onPress: () => any,
};

const MenuButton = ({ onPress }: Props) => (
  <View>
    <TouchableHighlight
      underlayColor="green"
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </TouchableHighlight>
  </View>
);

export default MenuButton;
