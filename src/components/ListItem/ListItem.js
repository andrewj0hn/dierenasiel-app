// @flow
import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  AGE, NAME, RACE, SEX,
} from '../../constants/Strings';
import styles from './styles';
import { statusBackgroundColor, statusLabel } from './helpers';

type Props = {
  name: string,
  race: string,
  age: number,
  sex: string,
  image: string,
  status: number,
}

const ListItem = ({
  name, race, age, sex, image, status,
}: Props) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image }} />
    <View style={styles.contentWrapper}>
      <View style={styles.content}>
        <View style={styles.column}>
          <Text style={styles.row}>
            {NAME}
:
          </Text>
          <Text style={styles.row}>
            {RACE}
:
          </Text>
          <Text style={styles.row}>
            {AGE}
:
          </Text>
          <Text>
            {SEX}
:
          </Text>
        </View>
        <View>
          <Text style={styles.row}>{name}</Text>
          <Text style={styles.row}>{race}</Text>
          <Text style={styles.row}>{age}</Text>
          <Text>{sex}</Text>
        </View>
      </View>
      <View style={[styles.status, { backgroundColor: statusBackgroundColor(status) }]}>
        <Text style={styles.statusLabel}>{statusLabel(status).toUpperCase()}</Text>
      </View>
    </View>
  </View>
);

export default ListItem;
