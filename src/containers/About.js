import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import { screen } from '../config/Metrics';


export default class Sponsors extends Component{
  render(){
     const {containerStyle, backgroundImageStyle, columnStyle, secondaryTextStyle, titleTextStyle, mainTextStyle, barStyle, arrowDown, barColumnStyle, rowStyle} = styles;
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
            <View style={rowStyle}>



              <View style={columnStyle}>
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
            <Text style = {mainTextStyle}>
               GreenVille Open Studios allows you to experience the life of
               local artists at work in thier studios for one full weekend,
               November 11-12. This free, self-guided tour is a unique
               experience to engage with our community's incredible talent,
               learn about artistic processes, enhance or begin your art
               collection and become inspired
            </Text>
            <Text style = {mainTextStyle}>
              Now in its 16th year, the 2017 tour features 145 artists all
              within a 15-mile radius of downtown Greenville with Easley, Greer,
              Travelers Rest and Simpsonville included. Open Studios catalogues
              can be found at all the studios as wellas here at MAC in late
              October.
            </Text>
            <View style={barColumnStyle}>
                <View style={barStyle}>
                  <Text style = {titleTextStyle}>
                     catalogue
                  </Text>
                </View>
                <View style={arrowDown}></View>
            </View>
            <Text style = {mainTextStyle}>
              Find a copy of the 2017 catalogue at the MAC office, various
              retail locations throughout Greenville and in the November 3rd
              edition of the Greenville Journal.
            </Text>
            <View style={barColumnStyle}>
                <View style={barStyle}>
                  <Text style = {titleTextStyle}>
                     more resources
                  </Text>
                </View>
                <View style={arrowDown}></View>
            </View>
            <View style={barColumnStyle}>
                <View style={barStyle}>
                  <Text style = {titleTextStyle}>
                     contact information
                  </Text>
                </View>
                <View style={arrowDown}></View>
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
    paddingLeft: 10,
    // textAlign: 'center',
        //fontWeight:
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
    justifyContent: 'space-around'
  },
  columnStyle: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    // paddingLeft: 25
    justifyContent: 'space-around',
    // flex: 1,
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
  }
}
