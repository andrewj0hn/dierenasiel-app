// @flow
import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 40,
    height: 30,
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    paddingVertical: 6,
    paddingHorizontal: 5,
  },
  line: {
    height: 3,
    borderRadius: 1.5,
    backgroundColor: BLACK,
  },
});
