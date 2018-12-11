// @flow
import { StyleSheet } from 'react-native';
import { WHITE } from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: 30,
    height: 20,
    justifyContent: 'space-between',
    left: 18,
  },
  line: {
    height: 4,
    borderRadius: 2,
    backgroundColor: WHITE,
  },
});
