// @flow
import { StyleSheet } from 'react-native';
import {
  LIST_ITEM_COLOR, WHITE, EXTRA_BOLD, LIGHT, BORDER_GREY,
} from '../../constants/Styles';

export default StyleSheet.create({
  touchableHighlight: {
    marginBottom: 7,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: LIST_ITEM_COLOR,
    borderColor: BORDER_GREY,
    borderWidth: 0.5,
  },
  image: {
    width: 130,
    resizeMode: 'cover',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    padding: 12,
  },
  column: {
    marginEnd: 12,
  },
  text: {
    fontWeight: LIGHT,
  },
  textMargin: {
    marginBottom: 3,
  },
  status: {
    height: 26,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  statusLabel: {
    color: WHITE,
    fontSize: 11,
    fontStyle: 'italic',
    fontWeight: EXTRA_BOLD,
    letterSpacing: 0.4,
    marginEnd: 12,
  },
});
