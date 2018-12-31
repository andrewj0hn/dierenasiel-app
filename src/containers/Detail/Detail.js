// @flow
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';
import { DESCRIPTION } from '../../constants/Strings';
import { statusLabel } from '../../helpers';
import AnimalDetailOverview from '../../components/AnimalDetailOverview';
import PhotoGallery from '../../components/PhotoGallery';

type Props = {
  navigation: Object,
}

class Detail extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.name,
    };
  };

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const { description, images, status } = params;

    return (
      <ScrollView>
        <PhotoGallery images={images} status={status} />
        <AnimalDetailOverview {...params} />
        <View style={[styles.statusBar, styles.statusBarBackgroundColor(status)]}>
          <Text style={styles.statusBarText}>{DESCRIPTION.toUpperCase()}</Text>
          <Text style={[styles.statusBarText, styles.italic]}>
            {statusLabel(status).toUpperCase()}
          </Text>
        </View>
        <Text style={[styles.text, styles.description]}>{description}</Text>
      </ScrollView>
    );
  }
}

export default Detail;
