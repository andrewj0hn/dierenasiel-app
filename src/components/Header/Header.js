// @flow
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MenuButton from '../MenuButton';
import HeaderTitle from '../HeaderTitle';
import styles from './styles';

const propTypes = {
  onMenuButtonClick: PropTypes.func,
};

const defaultProps = {
  onMenuButtonClick: () => {},
}

const Header = ({ onMenuButtonClick }) => {
  console.log('onMenuButtonClick');
  return (
    <View style={styles.container}>
      <MenuButton onPress={onMenuButtonClick} />
      <HeaderTitle />
    </View>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
