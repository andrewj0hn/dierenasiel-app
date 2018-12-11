// @flow
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import styles from '../styles';
import ListItem from '../../components/ListItem';
import { DOGS } from '../../constants/Strings';
import { keyExtractor, listFooterComponent } from '../helpers';
import MenuButton from '../../components/MenuButton';
import SideMenu from '../../components/SideMenu';

type Props = {
  navigation: Object,
  dogs: [],
  isFetchingDogs: false,
  sideMenuIsOpen: false,
  onSideMenuItemPress: Function,
  onMenuButtonPress: Function,
  fetchDogs: Function,
}

class Dogs extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const onMenuButtonPress = navigation.getParam('onMenuButtonPress');
    return {
      title: DOGS,
      headerLeft: (
        <MenuButton onMenuButtonPress={onMenuButtonPress} />
      ),
    };
  };

  componentDidMount() {
    const { fetchDogs, navigation, onMenuButtonPress } = this.props;
    fetchDogs();
    navigation.setParams({ onMenuButtonPress });
  }

  renderItem = ({ item }) => (
    <ListItem {...item} />
  );

  render() {
    const { dogs, sideMenuIsOpen, onSideMenuItemPress } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu sideMenuIsOpen={sideMenuIsOpen} onSideMenuItemPress={onSideMenuItemPress} />
        <FlatList
          data={dogs}
          style={styles.content}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          ListFooterComponent={listFooterComponent}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dogs);
