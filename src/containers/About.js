import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { screen } from '../config/Metrics';


export default class Sponsors extends Component{
  render(){
     const {containerStyle, iconStyle, mainTextTitleStyle, imageStyle, backgroundImageStyle, columnStyle, secondaryTextStyle, titleTextStyle, mainTextStyle, barStyle, arrowDown, barColumnStyle, rowStyle} = styles;
     return(
       <Image style = {backgroundImageStyle}
         source = {require('../assets/images/backgrounds/aboutbackground.jpg')}
         >
        <ScrollView contentContainerStyle={containerStyle}>
            <View style={barColumnStyle}>
                <View style={barStyle}>
                  <Text style = {titleTextStyle}>
                    weekend hours
                  </Text>
                </View>
                <View style={arrowDown}></View>
            </View>
            <View style={{...rowStyle, paddingTop: 8}}>
              <View style={{...columnStyle, paddingLeft: 30}}>
                <Text style = {mainTextStyle} >
                  Friday November 10th
                </Text>
                <Text style={secondaryTextStyle}>
                  (select studios only)
                </Text>
                <Text style = {mainTextStyle} >
                  Saturday November 11th
                </Text>
                <Text style = {mainTextStyle} >
                  Sunday November 12th
                </Text>
              </View>
              <View style={columnStyle}>
                <Text style = {mainTextStyle}>
                  6:00 PM - 9:00 PM
                </Text>

                <Text style = {{...mainTextStyle, paddingTop: 13}}>
                  10:00 AM - 6:00 PM
                </Text>

                <Text style = {mainTextStyle}>
                  Noon - 6:00 PM
                </Text>
              </View>
            </View>

            <View style={barColumnStyle}>
                <View style={barStyle}>
                  <Text style = {titleTextStyle}>
                    about
                  </Text>
                </View>
                <View style={arrowDown}></View>
            </View>
            <Text style = {{...mainTextStyle, paddingLeft: 30, paddingRight: 30}}>
               GreenVille Open Studios allows you to experience the life of
               local artists at work in thier studios for one full weekend,
               November 11-12. This free, self-guided tour is a unique
               experience to engage with our community's incredible talent,
               learn about artistic processes, enhance or begin your art
               collection and become inspired
            </Text>
            <Text style = {{...mainTextStyle, paddingLeft: 30, paddingRight: 30}}>
              Now in its 16th year, the 2017 tour features 145 artists all
              within a 15-mile radius of downtown Greenville with Easley, Greer,
              Travelers Rest and Simpsonville included. Open Studios catalogues
              can be found at all the studios as wellas here at MAC in late
              October.
            </Text>
            <View style={barColumnStyle}>
                <View style={barStyle}>
                  <Text style = {titleTextStyle}>
                     more resources
                  </Text>
                </View>
                <View style={arrowDown}></View>
            </View>
            <View style={rowStyle}>
              <View style={{...columnStyle, flex: 1, justifyContent: 'flex-start', paddingLeft: 35}}>
                <Image style={{...imageStyle, height: 150}} source={require('../assets/images/backgrounds/Catalogueimage.png')} />
                <Image style={{...imageStyle}} source={require('../assets/images/backgrounds/twelvePainting.png')} />
              </View>
              <View style={columnStyle}>
                <Text style={mainTextTitleStyle}>Catalogue</Text>
                <Text style = {mainTextStyle}>
                  Find a copy of the 2017 catalogue at the MAC office, various
                  retail locations throughout Greenville and in the November 3rd
                  edition of the Greenville Journal.
                </Text>
                <Text style={{...mainTextTitleStyle, paddingTop: 49}}>
                    12 x 12 Exhibit
                </Text>
                <Text style={mainTextTitleStyle}>
                  Something on the Squares
                </Text>
                <Text style={{...mainTextTitleStyle, paddingTop: 10}}>
                  Nov. 4 - Dec. 15, 2017
                </Text>
                <Text style={{...mainTextStyle, paddingTop: 10}}>
                  Make MAC your first stop the
                  week before or the weekend of
                  Open Studios. An exhibit of 12 x
                  12 inch works from the 145
                  participating artists will be on
                  display in our gallery.
                </Text>
              </View>
            </View>
            <View style={barColumnStyle}>
                <View style={barStyle}>
                  <Text style = {titleTextStyle}>
                     contact information
                  </Text>
                </View>
                <View style={arrowDown}></View>
            </View>
            <View style={{...columnStyle, alignItems: 'center', paddingLeft: 50, paddingRight: 50}}>
              <View style={{...rowStyle}}>
                <View style={{...columnStyle, flex: 1}}>
                  <Image source={require('../assets/images/socialMedia/GPSiconR.png')} style={{...iconStyle}}/>
                  <View style={{height: 20}}/>
                  <Image source={require('../assets/images/socialMedia/phoneiconR.png')} style={{...iconStyle, paddingLeft: 78}}/>
                  <Image source={require('../assets/images/socialMedia/atR.png')} style={iconStyle}/>
                  <Image source={require('../assets/images/socialMedia/GlobeiconR.png')} style={iconStyle}/>
                </View>

                <View style={{...columnStyle, justifyContent: 'flex-start', flex: 4, marginLeft: 9}}>
                  <View >
                    <Text style={mainTextStyle}>Metropolitan Arts Council</Text>
                    <Text style={mainTextStyle}>16 Augusta Street</Text>
                    <Text style={mainTextStyle}>Greenville, SC 29601</Text>
                  </View>
                  <Text style={{...mainTextStyle, paddingTop: 20}}>(864) 467-3132</Text>

                  <Text style={{...mainTextStyle, paddingTop: 20}}>mac@greenvilleARTS.com</Text>

                  <Text style={{...mainTextStyle, paddingTop: 20}}>greenvilleARTS.com</Text>
                </View>
              </View>
              <View style={{...rowStyle, paddingLeft: 0, paddingRight: 0}}>
                <TouchableOpacity
                  onPress={()=>'https://www.google.com'}
                  style={{ flex: 1, alignItems: 'center', height: 25}}
                >
                  <Image
                    style={{flex: 1,  resizeMode: 'contain'}}
                    source={require('../assets/images/socialMedia/Facebook.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>'https://www.google.com'}
                  style={{flex: 1, alignItems: 'center', height: 25}}
                >
                  <Image
                    style={{flex: 1, resizeMode: 'contain'}}
                    source={require('../assets/images/socialMedia/Instagram.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>'https://www.google.com'}
                  style={{flex: 1, alignItems: 'center', height: 25}}
                >
                  <Image
                    style={{flex: 1, resizeMode: 'contain'}}
                    source={require('../assets/images/socialMedia/Twitter.png')}
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require('../assets/images/logos/Maclogo.png')}
                style={{width: 230, resizeMode: 'contain'}}
              />
            </View>

      </ScrollView>
    </Image>

     )
   }
 }
const styles = {
  containerStyle:{
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // flex:1,
    // borderWidth: 10,
    borderColor: 'white'
  },
  backgroundImageStyle: {
      resizeMode: 'cover',
      width: null,
      height: null,
      flex: 1,
      alignItems: 'center'
    },
  titleTextStyle:{
    color: 'white',
    fontFamily: 'sweez',
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  mainTextStyle:{
    fontFamily: 'FrancophilSans',
    fontSize: 15,
    // paddingLeft: 10,
    // textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: 'white',
    // paddingLeft: 25,
    // paddingRight: 25
  },
  secondaryTextStyle: {
    fontFamily: 'FrancophilSans',
    fontSize: 12,
    color: 'white',
    paddingLeft: 10
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  columnStyle: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    // alignItems: 'flex-start',
    // paddingLeft: 25
    justifyContent: 'space-around',
    flex: 3,
    // borderWidth: 1,
    // borderColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    // alignItems: 'center',
    // flex: 1,
    // paddingTop: 10
  },
  arrowDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'rgb(183, 86,114)',
  },
  barStyle: {
    height: 30,
    width: screen.width,
    // flex: 1,
    backgroundColor: 'rgb(183, 86,114)',
    // paddingTop: 10
  },
  barColumnStyle: {
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // flex: 1,
    alignItems: 'center',
    // flex: 1,
    paddingTop: 10,
    // width: 1000
  },
  imageStyle:{
    resizeMode: 'contain',
    height: 110,
    width: 80,
    // borderWidth: 3,
    // borderColor: 'white',
  },
  mainTextTitleStyle: {
    fontFamily: 'FrancophilSans',
    color: 'white',
    fontWeight: '500',
    fontSize: 18
  },
  iconStyle:{
    height: 30,
    resizeMode: 'contain',
    marginTop: 10
  }
}
