// @flow
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { HOMEPAGE_TITLE } from '../../constants/Strings';

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>{HOMEPAGE_TITLE}</Text>
  </View>
);
