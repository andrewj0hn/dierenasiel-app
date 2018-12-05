// @flow
import React from 'react';
import { StatusBar as StatusBarRN, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { STATUS_BAR_STYLE } from '../../constants/Styles';

const StatusBar = ({ height = 0 }) => (
  <View>
    <StatusBarRN barStyle={STATUS_BAR_STYLE} />
    <View style={[styles.statusBarHeight, { height }]} />
  </View>
);

StatusBar.propTypes = {
  height: PropTypes.number,
};

export default StatusBar;
