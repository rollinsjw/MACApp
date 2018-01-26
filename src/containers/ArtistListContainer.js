import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { sortByName, handicapAccessible, openFriday } from '../redux/actions/ArtistListActions';
import ArtistListItem from '../components/ArtistListItem';
import { screen } from '../config/Metrics'

class ArtistListContainer extends React.Component {
  renderIf(condition, content){
    if(condition) {
      return content;
    }else {
      return null;
    }
  }
  
  render(){
    return(
      <View style={{flex: 1}}>
      <Image style={styles.backgroundImageStyle} source={require('../assets/images/backgrounds/accessibilitybackground.jpeg')} />
        {
        this.renderIf(this.props.navigation.state.params.title === 'medium',
        <View style={{width: screen.width, flexDirection: 'row', justifyContent: 'center', marginBottom: 10, alignItems: 'center'}}>
          <View style={{...styles.buttonStyle, width: screen.width*.8, height: 50, marginTop: 5, alignItems: 'center'}}>
            <Text style={styles.buttonTextStyle}>
              {this.props.navigation.state.params.medium}
            </Text>
          </View>
        </View>)
      }
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
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    backgroundColor: 'rgba(51, 53, 61, .451)',
    alignItems: 'center'
    // height: screen.height * .082

  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'sweez',
    fontSize: 28
  }
}
