// @flow
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
  onPress: PropTypes.func,
};

const defaultProps = {
  onPress: () => {},
};

const MenuButton = ({ onPress }) => (
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

MenuButton.propTypes = propTypes;
MenuButton.defaultProps = defaultProps;

export default MenuButton;
