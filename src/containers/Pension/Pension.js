// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { PENSION } from '../../constants/Strings';
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

class Pension extends Component<Props> {
  static navigationOptions = {
    title: PENSION,
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
        <Text style={styles.text}>
          Voordat u uw huisdier kunt komen brengen in ons pension moet vooraf gereserveerd worden bij het asiel.
          De tarieven hiervoor bedragen € 37,50 Na betaling hiervan wordt het dier ingeschreven.
          De reserveringskosten worden afgetrokken van het eindbedrag (totaalbedrag voor het pensionverblijf).
          Het eindbedrag moet worden voldaan aan het begin van de pensionperiode, bij het brengen van uw hond of kat.
        </Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pension);
