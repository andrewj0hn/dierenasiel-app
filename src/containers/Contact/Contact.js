// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CONTACT } from '../../constants/Strings';
import AppIcon from '../../components/AppIcon/AppIcon';
import MenuButton from '../../components/MenuButton';
import SideMenu from '../../components/SideMenu';
import Store from '../../config/Store';
import { toggleSideMenu } from '../../actions/sideMenu';
import styles from './styles';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';

type Props = {
  navigation: Object,
  sideMenuIsOpen: false,
  onSideMenuItemPress: Function,
}

class Contact extends Component<Props> {
  static navigationOptions = {
    title: CONTACT,
    headerLeft: <AppIcon />,
    headerRight: <MenuButton onMenuButtonPress={() => Store.dispatch(toggleSideMenu())} />,
  };

  render() {
    const { navigation, sideMenuIsOpen, onSideMenuItemPress } = this.props;
    return (
      <View style={styles.container}>
        <SideMenu
          sideMenuIsOpen={sideMenuIsOpen}
          onSideMenuItemPress={onSideMenuItemPress}
          routeName={navigation.state.routeName}
        />
        <Text style={styles.text}>Via onderstaande gegevens kunt u contact met ons opnemen, wij helpen u graag!</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
