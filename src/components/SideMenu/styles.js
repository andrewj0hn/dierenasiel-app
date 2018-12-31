// @flow
import { StyleSheet } from 'react-native';
import {
  TOP_LAYER, SIDE_MENU_BACKGROUND_COLOR, SIDE_MENU_ITEM_TEXT, BORDER_GREY, REGULAR,
} from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    zIndex: TOP_LAYER,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: SIDE_MENU_BACKGROUND_COLOR,
    borderLeftWidth: 0.5,
    borderLeftColor: BORDER_GREY,
  },
  label: {
    color: SIDE_MENU_ITEM_TEXT,
    fontSize: 16,
    fontWeight: REGULAR,
    letterSpacing: 0.4,
    marginVertical: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
