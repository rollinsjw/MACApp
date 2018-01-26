import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';


const ArtistListItem = ({artistInfo, navigate}) => {
  return(
    <TouchableOpacity
      onPress= {() => navigate()}
      style={{paddingRight: 40, paddingLeft: 40}}
      >
      <View style={styles.rowStyle}>
        <Image source={artistInfo["Img"]} style={{ height: 80, width: 80,resizeMode: 'contain'}}/>
        <View style={styles.columnStyle}>
          <Text style={styles.textStyleTitle}>{artistInfo["First Name"]} {artistInfo["Last Name"]} -# {artistInfo["STUDIO#"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["STUDIO Address"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["STUDIO City, State, Zip"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["STUDIO phone number"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["Email Address"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["Website Address"]}</Text>

        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    // flexWrap: 'wrap'
    // flex: 2
    flex: 1,
    // paddingTop: 10
  },
  rowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    height: 170,
    paddingBottom: 20,
    paddingTop: 20,
    flex: 1,
    borderTopWidth: .5,
    backgroundColor: 'transparent',
    borderColor: 'white',
    // flexWrap: 'wrap'
    // paddingLeft: 10,
    // paddingRight: 10
  },
  buttonStyle: {
    height: 50,
    marginTop: 50
  },
  textStyle: {
    fontFamily: "FrancophilSans",
    fontSize: 14,
    color: 'white',
  },
  textStyleTitle: {
    fontFamily: "FrancophilSans",
    fontSize: 18,
    color: 'white'
  }
}

export default ArtistListItem;
