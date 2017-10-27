import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { sortByName, handicapAccessible, openFriday } from '../redux/actions/ArtistListActions';
import ArtistListItem from '../components/ArtistListItem';

class ArtistListContainer extends React.Component {

  render(){
    console.log("What is happening?")
    return(
      <View style={{flex: 1}}>
      <Image style={styles.backgroundImageStyle} source={require('../assets/images/backgrounds/accessibilitybackground.jpeg')} />
        <FlatList
          data={this.props.artistList}
          renderItem={({item}) => <ArtistListItem
            artistInfo = {item}
            navigate={() => this.props.navigation.navigate('ArtistPageContainer', {artistInfo: item})}
          />}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps, null)(ArtistListContainer);

const styles = {
  backgroundImageStyle: {
    // resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0
  }
}
