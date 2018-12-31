// @flow
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import styles from '../styles';
import AnimalListItem from '../../components/AnimalListItem';
import { CATS } from '../../constants/Strings';
import { keyExtractor, listFooterComponent } from '../helpers';
import SideMenu from '../../components/SideMenu';
import AppIcon from '../../components/AppIcon/AppIcon';
import MenuButton from '../../components/MenuButton';
import Store from '../../config/Store';
import { toggleSideMenu } from '../../actions/sideMenu';

type Props = {
  navigation: Object,
  cats: [],
  isFetchingCats: false,
  sideMenuIsOpen: false,
  onSideMenuItemPress: Function,
  onAnimalListItemPress: Function,
  fetchCats: Function,
}

class Cats extends Component<Props> {
  static navigationOptions = {
    title: CATS,
    headerLeft: <AppIcon />,
    headerRight: <MenuButton onMenuButtonPress={() => Store.dispatch(toggleSideMenu())} />,
  };

  componentDidMount() {
    const { fetchCats } = this.props;
    fetchCats();
  }

  renderItem = ({ item }) => {
    const { onAnimalListItemPress } = this.props;
    return (
      <AnimalListItem {...item} onPress={() => onAnimalListItemPress(item)} />
    );
  };

  render() {
    const {
      navigation, cats, sideMenuIsOpen, onSideMenuItemPress,
    } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu
          sideMenuIsOpen={sideMenuIsOpen}
          onSideMenuItemPress={onSideMenuItemPress}
          routeName={navigation.state.routeName}
        />
        <FlatList
          data={cats}
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
)(Cats);
