import React from 'react';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity, Image, Text, Button, TouchableHighlight} from 'react-native';
//screen imports
import MainMenu from '../containers/MainMenu';
import ArtistsContainer from '../containers/ArtistsContainer';
import MapsContainer from '../containers/MapsContainer';
import ArtistListContainer from '../containers/ArtistListContainer';
import About from '../containers/About';
import Sponsors from '../containers/Sponsors';
import ArtistPageContainer from '../containers/ArtistPageContainer';
import MediumContainer from '../containers/MediumContainer';
import AlphabeticalContainer from '../containers/AlphabeticalContainer';

const routeConfiguration= {
  Home: {
    screen: MainMenu,
    navigationOptions: {
      headerBackTitle: '',
      headerTintColor: 'white',
      // title: 'Home Page',
      header: null,
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        fontSize: 32
      }

      }
  },
  ArtistListContainer:{
    screen: ArtistListContainer,
    navigationOptions: ({navigation}) => ({
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30, marginRight: -15}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerTintColor: 'white',
      headerBackTitle: '',
      title: navigation.state.params.title,
      headerBackTitleStyle: {color: 'transparent'},
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        fontSize: 32


      }
      // headerRight: <TouchableOpacity
      //   onPress={() => navigate("Home")}
      //   style={{ alignItems: 'flex-end', height: 30}}
      // >
      //   <Image
      //     style={{flex: 1,  resizeMode: 'contain'}}
      //     source={require('../assets/images/socialMedia/Homeicon.png')}
      //   />
      // </TouchableOpacity>
    })
  },
  Artists: {
    screen: ArtistsContainer,
    navigationOptions: ({navigation}) => ({
      title: 'artists',
      headerTintColor: 'white',
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30, marginRight: -15}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)' },
      headerBackTitleStyle: {color: 'transparent'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        // fontWeight: 'bold',
        fontSize: 32,
        fontWeight: '800'
      }
    })
  },
  Alphabetical: {
    screen: AlphabeticalContainer,
    navigationOptions: ({navigation}) => ({
      title: 'name',
      headerTintColor: 'white',
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30, marginRight: -15}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)' },
      headerBackTitleStyle: {color: 'transparent'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        // fontWeight: 'bold',
        fontSize: 32,
        fontWeight: '800'
      }
    })
  },
  Map: {
    screen: MapsContainer,
    navigationOptions: ({navigation}) => ({
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30, marginRight: -15}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerBackTitle: '',
      headerTintColor: 'white',
      title: 'map',
      headerStyle: {...navStyle, backgroundColor: 'rgb(223, 184, 89)'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        fontSize: 32,
        fontWeight: '800'
      }
    })
  },
  About: {
    screen: About,
    navigationOptions: ({navigation}) => ({
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30, marginRight: -15}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerTintColor: 'white',
      headerBackTitle: '',
      title: 'about',
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 91, 114)'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        fontSize: 32,
        fontWeight: '800'
      }
    })
  },
  Sponsors: {
    screen: Sponsors,
    navigationOptions: ({navigation}) => ({
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30, marginRight: -15}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerBackTitle: '',
      headerTintColor: 'white',
      title: 'sponsors',
      headerStyle: {...navStyle, backgroundColor: 'rgb(106, 155, 196)'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        fontSize: 32,
        fontWeight: '800'


      }

    })
  },
  ArtistPageContainer:{
    screen: ArtistPageContainer,
    navigationOptions: ({navigation}) => ({
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30, marginRight: -15}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerBackTitle: '',
      headerTintColor: 'white',

      headerBackTitleStyle: {color: 'transparent'},
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        fontSize: 32,
        fontWeight: '800'
      }
    })
  },
  MediumContainer:{
    screen: MediumContainer,
    navigationOptions: ({navigation}) => ({
      headerRight:
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={{ height: 30}}>
        <Image source={require('../assets/images/socialMedia/Homeicon.png')}  style={{resizeMode: 'contain',  flex: 1}}/>
      </TouchableHighlight>,
      headerBackTitle: '',
      headerTintColor: 'white',
      headerBackTitleStyle: {color: 'transparent'},
      title: 'mediums',
      headerStyle: {...navStyle, backgroundColor: 'rgb(171, 202, 191)'},
      headerTitleStyle: {
        fontFamily: 'sweez',
        color: 'rgb(51,53,60)',
        fontSize: 32,
        fontWeight: '800'
      }
    })
  }
}

const stackNavigatorConfiguration = {
  initialRouteName: 'Home',
}

const navStyle = {
  height: 70,
  // flex: 1
}

export const AppNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
