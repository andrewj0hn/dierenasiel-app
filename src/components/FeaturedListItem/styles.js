// @flow
import { StyleSheet } from 'react-native';
import {
  LIGHT, EXTRA_BOLD, LIST_ITEM_COLOR, PALETTE_GREEN, WHITE, BORDER_GREY,
} from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    backgroundColor: LIST_ITEM_COLOR,
    borderColor: BORDER_GREY,
    borderWidth: 0.5,
    marginBottom: 7,
  },
  image: {
    height: 165,
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 12,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
  },
  text: {
    marginTop: 4,
    fontWeight: LIGHT,
  },
  readMoreButton: {
    height: 34,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PALETTE_GREEN,
  },
  readMoreText: {
    color: WHITE,
    fontSize: 11,
    fontWeight: EXTRA_BOLD,
    letterSpacing: 0.6,
  },
});
