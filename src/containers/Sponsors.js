import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Sponsors extends Component{
  render(){
     const {containerStyle, columnStyle, rowStyle, textStyle, } = styles;
    return(
      <View style = {containerStyle}>

        <View style = {columnStyle}>

          <Text style = {textStyle}>
          The Board of Directors and Staff of the Metropolitan Arts
          Council and the 145 participating artists would like to thank those
          businesses and individuals for making Greenville Open Studios 2017 the
          absolute best weekend for Greenville's visual artists. We appreciate
          their commitment to the arts in Greenville and look forward to working
          with them in the future.
          </Text>
          <Text style = {textStyle}>
          A big round of applause to the following for ensuring the success of
          Greenville Open Studios.
          </Text>
          <View style = {rowStyle}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/SEWlogo.png')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/SSBanklogo.png')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/GClogo.png')}
            />
          </View>
          <View style = {rowStyle}>
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/GHSlogo.png')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/BMWlogo.png')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/Michelin.png')}
            />
          </View>
        </View>

      </View>
        //TODO add navigation header && color (90, 1 57, 200)

    )
  }
}

const styles = {
  containerStyle: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      backgroundColor: 'white'
    },
  textStyle:{//TODO figure this out
    fontSize:16,
    fontFamily:'sweez',
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingLeft: 25,
    paddingRight: 25
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
    justifyContent: 'space-around',
    height: 90,
    paddingBottom: 20,//TODO adjust padding
    paddingTop: 20,
    padding: 50
  },

}
