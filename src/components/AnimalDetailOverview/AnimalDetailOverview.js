import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import {
  AGE,
  COLOR,
  DATE_OF_BIRTH,
  IN_ASYLUM_SINCE,
  NEUTERED_STERILIZED,
  NO,
  RACE,
  SEX,
  YES,
} from '../../constants/Strings';

type Props = {
  race: string,
  age: number,
  sex: string,
  color: string,
  neutered_sterilized: boolean,
  arrived: string,
  date_of_birth: string,
}

const AnimalDetailOverview = ({
  race,
  age,
  sex,
  color,
  neutered_sterilized: neuteredSterilized,
  arrived,
  date_of_birth: dateOfBirth,
}: Props) => (
  <View style={styles.overview}>
    <View style={styles.column}>
      <Text style={[styles.text, styles.row]}>
        {RACE}
        :
      </Text>
      <Text style={[styles.text, styles.row]}>
        {AGE}
        :
      </Text>
      <Text style={[styles.text, styles.row]}>
        {SEX}
        :
      </Text>
      <Text style={[styles.text, styles.row]}>
        {COLOR}
        :
      </Text>
      <Text style={[styles.text, styles.row]}>
        {NEUTERED_STERILIZED}
        :
      </Text>
      <Text style={[styles.text, styles.row]}>
        {IN_ASYLUM_SINCE}
        :
      </Text>
      <Text style={styles.text}>
        {DATE_OF_BIRTH}
        :
      </Text>
    </View>
    <View>
      <Text style={[styles.text, styles.row]}>{race}</Text>
      <Text style={[styles.text, styles.row]}>{age}</Text>
      <Text style={[styles.text, styles.row]}>{sex}</Text>
      <Text style={[styles.text, styles.row]}>{color}</Text>
      <Text style={[styles.text, styles.row]}>{neuteredSterilized ? YES : NO }</Text>
      <Text style={[styles.text, styles.row]}>{arrived}</Text>
      <Text style={styles.text}>{dateOfBirth}</Text>
    </View>
  </View>
);

export default AnimalDetailOverview;
