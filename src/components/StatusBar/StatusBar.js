// @flow
import React from 'react';
import { StatusBar as StatusBarRN, View } from 'react-native';
import styles from './styles';
import { STATUS_BAR_STYLE } from '../../constants/Styles';

type Props = {
  height: number,
};

const defaultProp = {
  height: 0,
};

const StatusBar = ({ height }: Props) => (
  <View>
    <StatusBarRN barStyle={STATUS_BAR_STYLE} />
    <View style={[styles.statusBarHeight, { height }]} />
  </View>
);

StatusBar.defaultProp = defaultProp;

export default StatusBar;
