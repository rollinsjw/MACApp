import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default class Sponsors extends Component{
  render(){
     const {containerStyle, columnStyle, rowStyle, textStyle, } = styles;
    return(
      <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>

        <View >

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
              source={require('../assets/images/logos/1.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/2.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/3.jpg')}
            />
          </View>
          <View style = {rowStyle}>
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/4.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/5.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/6.jpg')}
            />
          </View>

          <View style={rowStyle}>
            <Text style={styles.sponsorTextStyle}>Janette W. Wesley & Renato Vicario</Text>
            <Text style={styles.sponsorTextStyle}>The Traute E. & Roland H. Engeler Family</Text>
            <Text style={styles.sponsorTextStyle}> The Don & Zelma Waggoner Foundation</Text>
          </View>

          <View style = {rowStyle}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/10.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/11.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/12.jpg')}
            />
          </View>
          <View style = {rowStyle}>

            <Text style={styles.sponsorTextStyle}>The Fred Collins Foundation</Text>

            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/14.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/15.jpg')}
            />


          </View>
          <View style = {rowStyle}>

            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/16.jpg')}
            />


            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/17.jpg')}
            />

            <Text style={styles.sponsorTextStyle}>The Priester Foundation</Text>
          </View>
          <View style={rowStyle}>

            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/19.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/20.jpg')}
            />


            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/21.jpg')}
            />

          </View>
          <View style = {rowStyle}>
            <Text style={styles.sponsorTextStyle}>The fredric E. Hasert Memorial Trust</Text>

            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/23.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/24.jpg')}
            />
          </View>
          <View style = {rowStyle}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/25.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/26.jpg')}
            />

            <Text style={styles.sponsorTextStyle}>Margaret & Duff Bruce</Text>

          </View>
          <View style = {rowStyle}>

            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/28.jpg')}
            />

            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/29.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/30.jpg')}
            />


          </View>
          <View style = {rowStyle}>

            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/31.jpg')}
            />


            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/32.jpg')}
            />
            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/33.jpg')}
            />


          </View>
          <View style = {rowStyle}>

            <Image
              style = {{flex: 1, resizeMode: 'contain'}}
              source = {require('../assets/images/logos/34.jpg')}
            />


            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={require('../assets/images/logos/35.jpg')}
            />
          </View>
        </View>

      </ScrollView>
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
    fontFamily:'FrancophilSans',
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20
  },

  sponsorTextStyle: {
    fontSize: 18,
    fontFamily: 'FrancophilSans',
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
    flex: 1
  },

  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
    // flex: 1,
    // paddingTop: 10
  },
  rowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
    // paddingBottom: 20,//TODO adjust padding
    paddingTop: 70,
    padding: 50,
    paddingLeft: 5,
    paddingRight: 5
  },

}
