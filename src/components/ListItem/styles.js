// @flow
import { StyleSheet } from 'react-native';
import {
  LIST_ITEM_COLOR, BLACK, WHITE, EXTRA_BOLD,
} from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: LIST_ITEM_COLOR,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 10,
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
  row: {
    marginBottom: 3,
  },
  status: {
    height: 26,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  statusLabel: {
    color: WHITE,
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: EXTRA_BOLD,
    letterSpacing: 0.4,
    marginEnd: 12,
  },
});
