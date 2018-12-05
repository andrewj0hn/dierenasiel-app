// @flow
import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
