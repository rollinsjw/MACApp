import React, { Component } from 'react';
<<<<<<< HEAD
import { Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { screen } from '../config/Metrics';
import { CustomIcon } from '../components/commonComponents/CustomIcon';

=======
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { screen } from '../config/Metrics';
import { CustomIcon } from '../components/commonComponents/CustomIcon';
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
//TODO: how to turn off the header for this specific one

export default class MainMenu extends React.Component {
  render() {
    const { textRowStyle, copyStyle, iconStyle, backgroundImageStyle, doorStyle, doorStyleView, logoStyle, containerStyle, buttonTextStyle, logoViewStyle, logoImageStyle, dateStyle, greenvilleStyle, openStyle, studiosStyle, clearBackground, columnStyle, rowStyle, imageStyle, imageViewStyle, buttonStyle, H1, H3, GreenvilleStyle } = styles;
    return(
      <View style={containerStyle}>
        <Image
            style={backgroundImageStyle}
            source={require( '../assets/images/backgrounds/main.jpg')}
          >
                  <Image
                    style={logoStyle}
                    source={require('../assets/images/logos/Logo.png')}
                  />
                <View style={columnStyle}>
                  <Button
<<<<<<< HEAD
                    title={'artists'}
=======
                    title={'Artists'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
                    color={'rgb(255, 255, 255)'}
                    backgroundColor={'rgba(51, 53, 61, .451)'}
                    textStyle={buttonTextStyle}
                    style={buttonStyle}
                    onPress={() => this.props.navigation.navigate('Artists')}
                  />

                  <Button
                    backgroundColor={'rgba(51, 53, 61, .451)'}
<<<<<<< HEAD
                    title={'maps'}
=======
                    title={'Maps'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
                    textStyle={buttonTextStyle}
                    style={buttonStyle}
                    //TODO: add geolocating
                    onPress={() => this.props.navigation.navigate('Map', )}
                  />
                  <Button
<<<<<<< HEAD
                    title={'about'}
=======
                    title={'About'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
                    textStyle={buttonTextStyle}
                    style={buttonStyle}
                    backgroundColor={'rgba(51, 53, 61, .451)'}
                    onPress={() => this.props.navigation.navigate('About')}
                  />
                  <Button
<<<<<<< HEAD
                    title={'sponsors'}
=======
                    title={'Sponsors'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
                    textStyle={buttonTextStyle}
                    style={buttonStyle}
                    backgroundColor={'rgba(51, 53, 61, .451)'}
                    onPress={()=> this.props.navigation.navigate('Sponsors')}
                  />
                </View>
                <View style={rowStyle}>
                  <TouchableOpacity
<<<<<<< HEAD
                    onPress={()=>Linking.openURL('https://www.facebook.com/macartscouncil/')}
=======
                    onPress={()=>'https://www.google.com'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
                    style={{ flex: 1, alignItems: 'center', height: 30}}
                  >
                    <Image
                      style={{flex: 1,  resizeMode: 'contain'}}
                      source={require('../assets/images/socialMedia/Facebook.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
<<<<<<< HEAD
                    onPress={()=>Linking.openURL('https://www.instagram.com/macartscouncil/')}
=======
                    onPress={()=>'https://www.google.com'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
                    style={{flex: 1, alignItems: 'center', height: 30}}
                  >
                    <Image
                      style={{flex: 1, resizeMode: 'contain'}}
                      source={require('../assets/images/socialMedia/Instagram.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
<<<<<<< HEAD
                    onPress={()=>Linking.openURL('https://twitter.com/MACartscouncil')}
=======
                    onPress={()=>'https://www.google.com'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
                    style={{flex: 1, alignItems: 'center', height: 30}}
                  >
                    <Image
                      style={{flex: 1, resizeMode: 'contain'}}
                      source={require('../assets/images/socialMedia/Twitter.png')}
                    />
                  </TouchableOpacity>
                </View>
              <View style={doorStyleView}>
                <Image
                  style={doorStyle}
                  source={require('../assets/images/logos/doors_color_row.png')}
                />

                <Text style={copyStyle}> © 2017 | Metropolitan Arts Council | greenvilleARTS.com </Text>
<<<<<<< HEAD
                <Text style={copyStyle}>Background: Jacki Newell | “The Light Changes” | Oil | 36 x 36 inches </Text>
=======
                <Text style={copyStyle}> background image: Jacki Newell | “The Light Changes” | Oil | 36 x 36 inches </Text>
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              </View>
            </Image>
        </View>
    )
  }
}

const styles = {
  iconStyle: {
    height: 30
  },
  logoViewStyle: {
    flex: .5,
    //  alignItems: 'center',
     paddingTop: 18
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logoStyle: {
    resizeMode: 'contain',
    width: null,
    height: null,
    flex: .5,
    alignItems: 'center',
    width: '90%',
    paddingTop: 18
  },
  doorStyle: {
    resizeMode: 'contain',
    width: screen.width*.85,
    // height: null,
    // flex: 1,
    height: 90,
    paddingTop: 0,

  },
  doorStyleView: {
    // resizeMode: 'contain',
    width: screen.width*.85,
    flex: .6,
  },
  containerStyle: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      // alignItems: 'center'
      // flex: 1,
      // paddingTop: 10
  },
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center'
    // flex: 1,
    // paddingTop: 10
  },
  rowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
    paddingBottom: 20,
    paddingTop: 20,
    padding: 50
  },
  textRowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    width: screen.width * .627,
    // height: screen.height * .082

  },
  buttonTextStyle: {
<<<<<<< HEAD
    fontSize: 16,
=======
    fontSize: 18,
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
    fontFamily: 'sweez',
    fontWeight: '600'
    // lineHeight: 1.2,
    // color: 'rgb(255, 255, 255)',
  },
  logoImageStyle: {
    width: '80%'
  },
  clearBackground: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
<<<<<<< HEAD
=======
  openStyle: {
    color: 'rgb(219, 187, 98)',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1}
  },
  greenvilleStyle: {
    color: 'rgb(171, 202, 191)',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1}

  },
  studiosStyle: {
    color: 'rgb(171, 92, 114)',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1}
  },
  dateStyle: {
    color: 'rgb(255, 255, 255)',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1}

  },
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
  copyStyle: {
    fontSize: 10,
    fontFamily: 'FrancophilSans',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    backgroundColor: 'transparent',
}

}
