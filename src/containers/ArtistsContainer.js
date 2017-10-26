import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import { screen } from '../config/Metrics';

import _ from 'lodash';
import { sortByName, handicapAccessible, openFriday } from '../redux/actions/ArtistListActions';

//TODO: how to turn off the header for this specific one

class ArtistsContainer extends React.Component {

  navigateAndSort = (sortFunction) => {
      sortFunction;
      this.props.navigation.navigate('ArtistListContainer');
  }

  render() {
    const { columnStyle, rowStyle, buttonStyle, buttonTextStyle, backgroundImageStyle} = styles;
    return(
      <View style={{flex: 1}}>
        <Image
            style={backgroundImageStyle}
            source={require('../assets/images/backgrounds/artistSort.jpeg')}
          >
          <View style={columnStyle}>
            <Button
              title={'Name'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.sortByName())}
            />
            <Button
              title={'Medium'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.props.navigation.navigate('MediumContainer')}

            />
            <Button
              title={'Open Friday'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.openFriday())}
            />
            <Button
              title={'Handicap Accessible'}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              textStyle={buttonTextStyle}
              style={buttonStyle}

              onPress={() => this.navigateAndSort(this.props.handicapAccessible())}
            />
          </View>
          <View style={rowStyle}>
            <TouchableOpacity
              onPress={()=>'https://www.google.com'}
              style={{ flex: 1, alignItems: 'center', height: 30}}
            >
              <Image
                style={{flex: 1,  resizeMode: 'contain'}}
                source={require('../assets/images/socialMedia/Facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>'https://www.google.com'}
              style={{flex: 1, alignItems: 'center', height: 30}}
            >
              <Image
                style={{flex: 1, resizeMode: 'contain'}}
                source={require('../assets/images/socialMedia/Instagram.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>'https://www.google.com'}
              style={{flex: 1, alignItems: 'center', height: 30}}
            >
              <Image
                style={{flex: 1, resizeMode: 'contain'}}
                source={require('../assets/images/socialMedia/Twitter.png')}
              />
            </TouchableOpacity>
          </View>
        </Image>
      </View>
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
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 120
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
}
