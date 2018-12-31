// @flow
import React, { Component } from 'react';
import { Image, View, FlatList } from 'react-native';
import ImageSlider from '../../classes';
import styles from './styles';
import { statusBackgroundColorOpacity } from '../../helpers/statusBar';
import { DOT_DEFAULT_COLOR } from '../../constants/Styles';

type Props = {
  images: Array<string>,
  status: number,
}

type State = {
  activeIndex: number,
}

class PhotoGallery extends Component<Props, State> {
  flatListRef: any;

  imageSlider: any;

  constructor(props: Object) {
    super(props);
    this.flatListRef = null;
    this.imageSlider = new ImageSlider();
    this.state = { activeIndex: 0 };
  }

  renderItem = ({ item }: Object) => (
    <Image key={item} source={{ uri: item }} style={styles.image} />
  );

  onScrollBeginDrag = (event: Object) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    this.imageSlider.setBeginValue(contentOffset);
  };

  onScrollEndDrag = (event: Object) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    this.imageSlider.setEndvalue(contentOffset);

    const currentIndex = this.imageSlider.getIndex();
    const total = this.imageSlider.getTotal();
    const diff = this.imageSlider.returnDifference();

    if (diff > 0 && diff > 50 && currentIndex < total - 1) {
      const newIndex = currentIndex + 1;
      this.setState({ activeIndex: newIndex });
      this.imageSlider.setIndex(newIndex);
      this.flatListRef.scrollToIndex({ index: newIndex });
    } else if (diff < 0 && diff < -50 && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      this.imageSlider.setIndex(newIndex);
      this.setState({ activeIndex: newIndex });
      this.flatListRef.scrollToIndex({ index: newIndex });
    } else {
      this.flatListRef.scrollToIndex({ index: currentIndex });
    }
  };

  dotBackgroundColor = (status: number, activeIndex: number, currentIndex: number) => {
    const backgroundColor = statusBackgroundColorOpacity(status);
    return {
      backgroundColor: activeIndex === currentIndex ? backgroundColor : DOT_DEFAULT_COLOR,
    };
  };

  render() {
    const { images, status } = this.props;
    const { activeIndex } = this.state;

    return (
      <View>
        <FlatList
          data={images}
          horizontal
          keyExtractor={item => item.toString()}
          ref={(ref) => {
            this.flatListRef = ref;
            this.imageSlider.setTotal(images.length);
          }}
          renderItem={this.renderItem}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.dots}>
          {images.map((dot, index) => (
            <View
              key={dot}
              style={[styles.dot, this.dotBackgroundColor(status, activeIndex, index)]}
            />
          ))}
        </View>
        <View />
      </View>
    );
  }
}

export default PhotoGallery;
