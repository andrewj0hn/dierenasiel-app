// @flow
import { StyleSheet } from 'react-native';
import {
  BLACK, TOP_LAYER, SIDE_MENU_BACKGROUND_COLOR, SIDE_MENU_ITEM_TEXT, BOLD,
} from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    zIndex: TOP_LAYER,
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: SIDE_MENU_BACKGROUND_COLOR,
    shadowColor: BLACK,
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  label: {
    color: SIDE_MENU_ITEM_TEXT,
    fontSize: 16,
    fontWeight: BOLD,
    letterSpacing: 0.4,
    marginVertical: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
