import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import { screen } from '../config/Metrics';

import _ from 'lodash';
import { sortByName, handicapAccessible, openFriday } from '../redux/actions/ArtistListActions';

//TODO: how to turn off the header for this specific one

class ArtistsContainer extends React.Component {
  // static navigationOptions = {
  //     headerBackTitle: '',
  //     title: 'artists',
  //     headerStyle: {backgroundColor: 'rgb(171, 202, 191)' },
  //     headerRight: () => {<Button title={'Home'} onPress={() => this.props.navigation.navigate('Home') } />},
  //     headerTitleStyle: {
  //       fontFamily: 'sweez',
  //       color: 'rgb(51,53,60)',
  //       // fontWeight: 'bold',
  //       fontSize: 40,
  //       fontWeight: '800'
  //   }
  // }

  navigateAndSort = (sortFunction, title) => {
      sortFunction;
      this.props.navigation.navigate('ArtistListContainer', {title: title});

  }

  render() {
    const { columnStyle, rowStyle, buttonStyle, buttonTextStyle, backgroundImageStyle} = styles;
    return(

        <Image
            style={backgroundImageStyle}
            source={require('../assets/images/backgrounds/artistSort.jpeg')}
          >
          <View style={{...columnStyle, marginTop: 3, marginBottom: -5}}>
            <Button
              title={'name'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.props.navigation.navigate("Alphabetical")}
            />
            <Button
              title={'medium'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.props.navigation.navigate('MediumContainer')}

            />
            <Button
              title={'open friday'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.openFriday(), 'friday')}
            />
            <TouchableOpacity
              onPress={()=> this.navigateAndSort(this.props.handicapAccessible(), 'artists')}
              style={{...buttonStyle, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(51, 53, 61, .451)'}}

            >
              <Image
                style={{height: 40,  resizeMode: 'contain'}}
                source={require('../assets/images/socialMedia/handicapicon.png')}
              />
          </TouchableOpacity>
          </View>
            <View style={{alignItems: 'center', flex: 2, borderColor: 'white'}}>

              <Image
                style={styles.doorStyle}
                source={require('../assets/images/logos/doors_color_row.png')}
              />
              <View>
                <Text style={styles.copyStyle}> © 2017 | Metropolitan Arts Council | greenvilleARTS.com</Text>
                <Text style={styles.copyStyle}>background: Paul Flint | "Untitled" | Graphite & Acrylic| 12 x 12</Text>
              </View>
            </View>
        </Image>

    )
  }
};

  const mapStateToProps = (state) => {
    return ({ artists: state.artistList });
  };

export default connect(mapStateToProps, { sortByName, handicapAccessible, openFriday })(ArtistsContainer);

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 3,
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 90,

    // flex: 1,
    // paddingTop: 10
  },
  rowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
    paddingBottom: 20,
    paddingTop: 20
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    width: screen.width * .627,
    height: 50,
    margin: 14,
    // flex: 1

    // height: screen.height * .082

  },
  buttonTextStyle: {
    fontSize: 18,
    fontFamily: 'sweez',
    fontWeight: '600'
    // lineHeight: 1.2,
    // color: 'rgb(255, 255, 255)',
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center'
  },
  copyStyle: {
    fontSize: 10,
    fontFamily: 'FrancophilSans',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    backgroundColor: 'transparent',
    // borderWidth: 1
},
doorStyle: {
  resizeMode: 'contain',
  width: screen.width*.85,
  height: 90,
  // flex: 1,
  paddingTop: -15,


},
}
