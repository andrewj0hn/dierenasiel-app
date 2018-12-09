// @flow
import { StyleSheet } from 'react-native';
import {
  BLACK, HEADER_COLOR, HEADER_HEIGHT, TOP_LAYER,
} from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    zIndex: TOP_LAYER,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    backgroundColor: HEADER_COLOR,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});
