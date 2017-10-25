import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default class Sponsors extends Component{
  render(){
     const {containerStyle, backgroundImageStyle, columnStyle, titleTextStyle, mainTextStyle} = styles;
     return(
       <View style = {containerStyle}>
        <Image style = {backgroundImageStyle}
          source = {require('../assets/images/backgrounds/aboutbackground.png')}
          >
          <View style = {columnStyle}>
            <View>
            <Text style = {titleTextStyle}>
              weekend hours
            </Text>
            <Text style = {mainTextStyle} >
              Friday November 10th | 6:00-9:00 PM
            </Text>
            <Text style= {mainTextStyle}>
              (select studios only)
            </Text>
            <Text style= {mainTextStyle}>
              Saturday November 11th | 10:00 AM-6:00 PM
            </Text>
            <Text style= {mainTextStyle}>
              Sunday November 12th | Noon-6:00PM
            </Text>

            <Text style = {titleTextStyle}>
              about
            </Text>
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
            <Text style = {titleTextStyle}>
              catalogue
            </Text>
            <Text style = {mainTextStyle}>
              Find a copy of the 2017 catalogue at the MAC office, various
              retail locations throughout Greenville and in the November 3rd
              edition of the Greenville Journal.
            </Text>
          </View>
          </View>
        </Image>
       </View>
     )
   }
 }
const styles = {
  containerStyle:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex:1,
  },
  backgroundImageStyle: {
      resizeMode: 'contain',
      width: null,
      height: null,
      flex: 1,
      alignItems: 'center'
    },
  titleTextStyle:{
    color: 'rgb(183, 86,114)',
    fontFamily: 'sweez',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  mainTextStyle:{
    fontFamily: 'sweez',
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    //fontWeight:

  },
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center'
    // flex: 1,
    // paddingTop: 10
  },
}
