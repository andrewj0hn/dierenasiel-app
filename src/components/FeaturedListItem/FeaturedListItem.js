// @flow
import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { READ_MORE } from '../../constants/Strings';

type Props = {
  title: string,
  text: string,
  image: string
};

const FeaturedListItem = ({
  title, text, image,
}: Props) => (
  <View style={styles.container}>
    { image && <Image style={styles.image} source={{ uri: image }} /> }
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
    <TouchableHighlight style={styles.readMoreButton}>
      <Text style={styles.readMoreText}>{READ_MORE.toUpperCase()}</Text>
    </TouchableHighlight>
  </View>
);

export default FeaturedListItem;
