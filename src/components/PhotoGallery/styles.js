// @flow
import { StyleSheet } from 'react-native';
import {
  DOT_DEFAULT_COLOR, WINDOW_WIDTH,
} from '../../constants/Styles';
import { statusBackgroundColorOpacity } from '../../helpers/statusBar';

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
  dotBackgroundColor: (status, activeIndex, currentIndex) => {
    const backgroundColor = statusBackgroundColorOpacity(status);
    return {
      backgroundColor: activeIndex === currentIndex ? backgroundColor : DOT_DEFAULT_COLOR,
    };
  },
});

export default styleSheet;
