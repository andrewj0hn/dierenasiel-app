// @flow
import React from 'react';
import { View } from 'react-native';
import MenuButton from '../MenuButton';
import HeaderTitle from '../HeaderTitle';
import styles from './styles';

type Props = {
  onMenuButtonClick: () => any
};

const Header = ({ onMenuButtonClick }: Props) => {
  console.log('onMenuButtonClick');
  return (
    <View style={styles.container}>
      <MenuButton onPress={onMenuButtonClick} />
      <HeaderTitle />
    </View>
  );
};

export default Header;
