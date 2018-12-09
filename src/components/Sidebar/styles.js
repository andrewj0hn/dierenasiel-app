// @flow
import { StyleSheet } from 'react-native';
import {
  BLACK, EXTRA_BOLD, HEADER_HEIGHT, MIDDLE_LAYER, SIDEBAR_COLOR,
} from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    zIndex: MIDDLE_LAYER,
    top: HEADER_HEIGHT,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: SIDEBAR_COLOR,
    shadowColor: BLACK,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: EXTRA_BOLD,
    letterSpacing: 0.4,
    marginVertical: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
