// @flow
import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

export const keyExtractor = (item: Object) => item.id.toString();

export const listFooterComponent = () => (
  <View style={styles.listFooterComponent} />
);
