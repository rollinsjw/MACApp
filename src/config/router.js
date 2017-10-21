import React from 'react';
import { StackNavigator } from 'react-navigation';

//screen imports
import MainMenu from '../containers/MainMenu';
import ArtistsContainer from '../containers/ArtistsContainer';
import MapsContainer from '../containers/MapsContainer';
import ArtistListContainer from '../containers/ArtistListContainer';


const routeConfiguration= {
  Home: {
    screen: MainMenu,
    navigationOptions: {
      title: 'Home Page',
      header: null
      }
  },
  ArtistListContainer:{
    screen: ArtistListContainer,
    navigationOptions: {
      title: 'Artists'
    }
  },
  Artists: {
    screen: ArtistsContainer,
    navigationOptions: {
      title: 'Sort the Artists'
    }
  },
  Map: {
    screen: MapsContainer,
    navigationOptions: {
      title: 'Map'
    }
  }
}

const stackNavigatorConfiguration = {
  initialRouteName: 'Home',
}

export const AppNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
