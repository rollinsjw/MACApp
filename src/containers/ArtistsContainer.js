import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { sortByName, handicapAccessible, openFriday } from '../redux/actions/ArtistListActions';

//TODO: how to turn off the header for this specific one

class ArtistsContainer extends React.Component {

  navigateAndSort = (sortFunction) => {
      sortFunction;
      this.props.navigation.navigate('ArtistListContainer');
  }

  render() {
    const { columnStyle, rowStyle, buttonStyle} = styles;
    return(
      <View style={{flex: 1}}>
        <View style={columnStyle}>
          <Button
            title={'Artist by Last Name'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
            onPress={() => this.navigateAndSort(this.props.sortByName())}
          />
          <Button
            title={'Medium'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
          />
          <Button
            title={'Open Friday'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
            onPress={() => this.navigateAndSort(this.props.openFriday())}
          />
          <Button
            title={'Handicap Accessible'}
            textStyle={{textAlign: 'center'}}
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
    justifyContent: 'flex-start',
    flex: 1
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
    height: 50,
    marginTop: 50
  }
}
