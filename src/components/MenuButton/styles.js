// @flow
import { StyleSheet } from 'react-native';
import { WHITE } from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: 30,
    height: 20,
    justifyContent: 'space-between',
  },
  line: {
    height: 4,
    borderRadius: 2,
    backgroundColor: WHITE,
  },
});
