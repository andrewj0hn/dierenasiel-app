// @flow
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: 32,
    height: 22,
    justifyContent: 'space-between',
  },
  line: {
    height: 5,
    borderRadius: 2,
    backgroundColor: 'grey',
  },
});
