// @flow
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import styles from '../styles';
import ListItem from '../../components/ListItem';
import { CATS } from '../../constants/Strings';
import { keyExtractor, listFooterComponent } from '../helpers';
import MenuButton from '../../components/MenuButton';
import SideMenu from '../../components/SideMenu';

type Props = {
  navigation: Object,
  cats: [],
  isFetchingCats: false,
  sideMenuIsOpen: false,
  onSideMenuItemPress: Function,
  onMenuButtonPress: Function,
  fetchCats: Function,
}

class Cats extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const onMenuButtonPress = navigation.getParam('onMenuButtonPress');
    return {
      title: CATS,
      headerLeft: (
        <MenuButton onMenuButtonPress={onMenuButtonPress} />
      ),
    };
  };

  componentDidMount() {
    const { fetchCats, navigation, onMenuButtonPress } = this.props;
    fetchCats();
    navigation.setParams({ onMenuButtonPress });
  }

  renderItem = ({ item }) => (
    <ListItem {...item} />
  );

  render() {
    const { cats, sideMenuIsOpen, onSideMenuItemPress } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu sideMenuIsOpen={sideMenuIsOpen} onSideMenuItemPress={onSideMenuItemPress} />
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
