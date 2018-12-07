// @flow
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

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

MenuButton.propTypes = {
  onPress: PropTypes.func,
};

MenuButton.defaultProps = {
  onPress: () => {},
};

export default MenuButton;
