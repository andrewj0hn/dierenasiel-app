// @flow
import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../constants/Styles';

const styleSheet = StyleSheet.create({
  image: {
    width: WINDOW_WIDTH,
    height: 180,
    resizeMode: 'cover',
  },
  dots: {
    position: 'absolute',
    width: '100%',
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 3,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
});

export default styleSheet;
