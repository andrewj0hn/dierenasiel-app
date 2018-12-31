// @flow
import { StyleSheet } from 'react-native';
import {
  BORDER_GREY, LIGHT, LIST_ITEM_COLOR,
} from '../../constants/Styles';

export default StyleSheet.create({
  overview: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: LIST_ITEM_COLOR,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: BORDER_GREY,
  },
  column: {
    marginEnd: 12,
  },
  row: {
    marginBottom: 3,
  },
  text: {
    fontWeight: LIGHT,
  },
});
