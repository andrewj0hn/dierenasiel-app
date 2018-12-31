// @flow
import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import {
  AGE, NAME, RACE, SEX,
} from '../../constants/Strings';
import styles from './styles';
import { statusBackgroundColor, statusLabel } from '../../helpers';

type Props = {
  name: string,
  race: string,
  age: number,
  sex: string,
  image: string,
  status: number,
  onPress: Function,
}

const AnimalListItem = ({
  name, race, age, sex, image, status, onPress,
}: Props) => (
  <TouchableHighlight onPress={onPress} style={styles.touchableHighlight}>
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View style={styles.column}>
            <Text style={[styles.text, styles.textMargin]}>
              {NAME}
              :
            </Text>
            <Text style={[styles.text, styles.textMargin]}>
              {RACE}
              :
            </Text>
            <Text style={[styles.text, styles.textMargin]}>
              {AGE}
              :
            </Text>
            <Text style={styles.text}>
              {SEX}
              :
            </Text>
          </View>
          <View>
            <Text style={[styles.text, styles.textMargin]}>{name}</Text>
            <Text style={[styles.text, styles.textMargin]}>{race}</Text>
            <Text style={[styles.text, styles.textMargin]}>{age}</Text>
            <Text style={styles.text}>{sex}</Text>
          </View>
        </View>
        <View style={[styles.status, { backgroundColor: statusBackgroundColor(status) }]}>
          <Text style={styles.statusLabel}>{statusLabel(status).toUpperCase()}</Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

export default AnimalListItem;
