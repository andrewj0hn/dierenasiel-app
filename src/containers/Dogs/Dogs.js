// @flow
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import styles from '../styles';
import AnimalListItem from '../../components/AnimalListItem';
import { DOGS } from '../../constants/Strings';
import { keyExtractor, listFooterComponent } from '../helpers';
import SideMenu from '../../components/SideMenu';
import AppIcon from '../../components/AppIcon/AppIcon';
import MenuButton from '../../components/MenuButton';
import Store from '../../config/Store';
import { toggleSideMenu } from '../../actions/sideMenu';

type Props = {
  navigation: Object,
  dogs: [],
  isFetchingDogs: false,
  sideMenuIsOpen: false,
  onSideMenuItemPress: Function,
  onMenuButtonPress: Function,
  onAnimalListItemPress: Function,
  fetchDogs: Function,
}

class Dogs extends Component<Props> {
  static navigationOptions = {
    title: DOGS,
    headerLeft: <AppIcon />,
    headerRight: <MenuButton onMenuButtonPress={() => Store.dispatch(toggleSideMenu())} />,
  };

  componentDidMount() {
    const { fetchDogs } = this.props;
    fetchDogs();
  }

  renderItem = ({ item }) => {
    const { onAnimalListItemPress } = this.props;
    return (
      <AnimalListItem {...item} onPress={() => onAnimalListItemPress(item)} />
    );
  };

  render() {
    const {
      navigation, dogs, sideMenuIsOpen, onSideMenuItemPress,
    } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu
          sideMenuIsOpen={sideMenuIsOpen}
          onSideMenuItemPress={onSideMenuItemPress}
          routeName={navigation.state.routeName}
        />
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
