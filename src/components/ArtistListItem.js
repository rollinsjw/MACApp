import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';


const ArtistListItem = ({artistInfo, navigate}) => {
  return(
    <TouchableOpacity
      onPress= {() => navigate()}>
      <View style={styles.rowStyle}>
        <Image source={artistInfo["Img"]} style={{flex: 1, height: 80, width: 20, borderWidth: 1}}/>
        <View style={styles.columnStyle}>
          <Text>{artistInfo["Last Name"]}, {artistInfo["First Name"]} - {artistInfo["STUDIO#"]}</Text>
          <Text>Lorem ipsum, will import this field from the data</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 2
    // flex: 1,
    // paddingTop: 10
  },
  rowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
    paddingBottom: 20,
    paddingTop: 20,
    flex: 1,
    borderWidth: 1
  },
  buttonStyle: {
    height: 50,
    marginTop: 50
  }
}

export default ArtistListItem;
