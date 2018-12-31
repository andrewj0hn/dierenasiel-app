// @flow
import React from 'react';
import { View, Image } from 'react-native';
import { logo } from '../../constants/Icons';
import styles from './styles';

const AppIcon = () => (
  <View style={styles.container}>
    <Image source={logo} style={styles.icon} />
  </View>
);

export default AppIcon;
