import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { sortByName, handicapAccessible, openFriday } from '../redux/actions/ArtistListActions';
import ArtistListItem from '../components/ArtistListItem';

class ArtistListContainer extends React.Component {

  render(){
    console.log("What is happening?")
    return(
      <FlatList
        data={this.props.artistList}
        renderItem={({item}) => <ArtistListItem
          artistInfo = {item}
        />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps, null)(ArtistListContainer);
