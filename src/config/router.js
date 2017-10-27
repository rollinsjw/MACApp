import React from 'react';
import { StackNavigator } from 'react-navigation';
import {CustomIcon} from '../components/commonComponents/CustomIcon';
import { TouchableOpacity, Image } from 'react-native';
//screen imports
import MainMenu from '../containers/MainMenu';
import ArtistsContainer from '../containers/ArtistsContainer';
import MapsContainer from '../containers/MapsContainer';
import ArtistListContainer from '../containers/ArtistListContainer';
import About from '../containers/About';
import Sponsors from '../containers/Sponsors';
import ArtistPageContainer from '../containers/ArtistPageContainer';
import MediumContainer from '../containers/MediumContainer';

const routeConfiguration= {
  Home: {
    screen: MainMenu,
    navigationOptions: {
      title: 'Home Page',
      header: null,
      }
  },
  ArtistListContainer:{
    screen: ArtistListContainer,
    navigationOptions: {
      title: 'Artists',
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)'},
      // headerRight: <TouchableOpacity
      //   onPress={() => navigate("Home")}
      //   style={{ alignItems: 'flex-end', height: 30}}
      // >
      //   <Image
      //     style={{flex: 1,  resizeMode: 'contain'}}
      //     source={require('../assets/images/socialMedia/Homeicon.png')}
      //   />
      // </TouchableOpacity>
    }
  },
  Artists: {
    screen: ArtistsContainer,
    navigationOptions: {
      title: 'Artists',
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)' }
    }
  },
  Map: {
    screen: MapsContainer,
    navigationOptions: {
      title: 'Map',
      headerStyle: {...navStyle, backgroundColor: 'rgb(223, 184, 89)'}
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 91, 114)'}
    }
  },
  Sponsors: {
    screen: Sponsors,
    navigationOptions: {
      title: 'Sponsors',
      headerStyle: {...navStyle, backgroundColor: 'rgb(106, 155, 196)'}

    }
  },
  ArtistPageContainer:{
    screen: ArtistPageContainer,
    navigationOptions: {
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)'}
    }
  },
  MediumContainer:{
    screen: MediumContainer,
    navigationOptions: {
      title: 'Mediums',
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)'}

    }
  }
}

const stackNavigatorConfiguration = {
  initialRouteName: 'Home',
}

const navStyle = {
  height: 50
}

const headerText = {
  fontFamily: 'FrancophilSans',
  size: 22
}

export const AppNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
