// @flow
import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
  containerWidth: menuIsOpen => ({
    width: menuIsOpen ? 250 : 0,
  }),
});
