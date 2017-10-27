import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import Communications from 'react-native-communications';

export default class ArtistPageContainer extends React.Component{
  render(){

    const param = this.props.navigation.state.params
    var img = param.artistInfo["Img"]
    const {linktextStyle, textStyle, artistImageStyle, iconStyle, backgroundImageStyle, containerStyle, columnStyle, rowStyle} = styles;
    return(
      <View style = {containerStyle}>
        <Image style = {backgroundImageStyle}
          source = {require('../assets/images/backgrounds/individualbackground.jpg')}>
          <View style = {columnStyle}>
          <Image
            source = {param.artistInfo["Img"]}
            style = {{height: 140, width: 140, resizeMode: 'contain'}}></Image>
          <Text
            style = {{fontFamily: 'sweez', fontSize: 24, fontWeight: "400", color: 'white', backgroundColor: 'transparent'}}> {param.artistInfo["First Name"]} {param.artistInfo["Last Name"]}</Text>
          </View>
          <View style = {{flexDirection: 'column', alignItems: 'flex-start'}}>
          <View style = {rowStyle}>
            <Image style = {{height:30, resizeMode:'contain'}}
              source = {require('../assets/images/socialMedia/GPSicon.png')}></Image>
              <TouchableOpacity
                onPress = {() => Linking.openURL('https://www.google.com/maps/search/?api=1&query='+param.artistInfo["Lat"]+','+param.artistInfo["Lng"])}>
                  <Text style = {linktextStyle}>{param.artistInfo["STUDIO Address"]}</Text>
                  <Text style = {linktextStyle}>{param.artistInfo["STUDIO City, State, Zip"]}</Text>
                </TouchableOpacity>
              </View>
          <View style = {rowStyle}>
          <Image style = {{height:30, resizeMode:'contain'}}
            source = {require('../assets/images/socialMedia/phoneicon.png')}></Image>
          <TouchableOpacity
            onPress = {() => Communications.phonecall(param.artistInfo["STUDIO phone number"], true)}>
              <Text style = {{fontSize:18, color:"white", fontFamily: 'sweez', textDecorationLine: 'underline', backgroundColor: 'transparent'}}> {param.artistInfo["STUDIO phone number"]}</Text>
            </TouchableOpacity>
          </View>
          <View style = {rowStyle}>
          <Image style = {{height:30, resizeMode:'contain'}}
            source = {require('../assets/images/socialMedia/at.png')}></Image>

              <Text style = {{fontSize:18, color:"white", fontFamily: 'sweez', textDecorationLine: 'underline', backgroundColor: 'transparent'}}> {param.artistInfo["Email Address"]}</Text>

          </View>
          <View style = {rowStyle}>
          <Image style = {{height:30, resizeMode:'contain'}}
            source = {require('../assets/images/socialMedia/Globeicon.png')}></Image>
          <TouchableOpacity
            onPress = {() => Linking.openURL("http://" + param.artistInfo["Website Address"])}>
              <Text style = {{fontSize:18, color:"white", fontFamily: 'sweez', textDecorationLine: 'underline', backgroundColor: 'transparent'}}> {param.artistInfo["Website Address"]}</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Image>
      </View>
    )
  }
  }
  const styles = {
    iconStyle:{
      height: 30,
      width: null,
      resizeMode: 'contain'
    },
    linktextStyle:{
      fontFamily: 'sweez',
      fontSize: 18,
      fontWeight: "400",
      color: 'white',
      textDecorationLine: 'underline',
      backgroundColor: 'transparent'

    },
    textStyle:{
      fontFamily: 'sweez',
      fontSize: 18,
      fontWeight: "400",
      color: 'white'
    },
    artistImageStyle:{
      width:50,
      height:50,
      backgroundColor: 'powderblue',

    },
    iconStyle: {
      backgroundColor: 'transparent'

    },
    backgroundImageStyle: {
      resizeMode: 'cover',
      width: null,
      height: null,
      flex: 1,
      alignItems: 'center'
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
      justifyContent: 'space-around',
      flex: 1,
      alignItems: 'center'
      // flex: 1,
      // paddingTop: 10
    },
    rowStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: 90,
      paddingTop: 30,
      paddingBottom: 20,
      padding: 50
    },

  }
