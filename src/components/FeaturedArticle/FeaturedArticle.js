// @flow
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

type Props = {
  id: number,
  title: string,
  text: string,
  image: string
};

const FeaturedArticle = ({ id, title, text, image }: Props) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image }} />
    <Text>{title}</Text>
    <Text>{text}</Text>
  </View>
);

export default FeaturedArticle;
