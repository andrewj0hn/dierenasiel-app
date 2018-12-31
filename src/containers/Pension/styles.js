// @flow
import { StyleSheet } from 'react-native';
import { LIGHT } from '../../constants/Styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  text: {
    fontWeight: LIGHT,
    lineHeight: 19,
  },
});
