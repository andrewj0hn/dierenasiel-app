// @flow
import { StyleSheet } from 'react-native';
import { EXTRA_BOLD, LIGHT, WHITE } from '../../constants/Styles';

export default StyleSheet.create({
  text: {
    fontWeight: LIGHT,
  },
  statusBar: {
    height: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statusBarText: {
    fontSize: 11,
    fontWeight: EXTRA_BOLD,
    color: WHITE,
  },
  italic: {
    fontStyle: 'italic',
  },
  description: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    lineHeight: 19,
  },
});
