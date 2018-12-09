// @flow
import { StyleSheet } from 'react-native';
import { EXTRA_BOLD, WHITE } from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: EXTRA_BOLD,
    letterSpacing: 0.4,
    color: WHITE,
  },
});
