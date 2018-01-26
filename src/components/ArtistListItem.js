import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';


const ArtistListItem = ({artistInfo, navigate}) => {
  const renderIf = (condition, content) => {
    if(condition) {
      return content;
    }else {
      return null;
    }
  }
  return(
    <TouchableOpacity
      onPress= {() => navigate()}
      style={{paddingRight: 20, paddingLeft: 20}}
      >
      <View style={styles.rowStyle}>
        <Image source={artistInfo["Img"]} style={{ height: 80, width: 80,resizeMode: 'contain'}}/>
        <View style={styles.columnStyle}>
          <Text style={styles.textStyleTitle}>{artistInfo["First Name"]} {artistInfo["Last Name"]} - #{artistInfo["STUDIO#"]}</Text>
          {renderIf(artistInfo["STUDIO Address"] != "", <Text style={styles.textStyle}>{artistInfo["STUDIO Address"]}</Text>)}
          {renderIf(artistInfo["STUDIO City, State, Zip"] != "", <Text style={styles.textStyle}>{artistInfo["STUDIO City, State, Zip"]}</Text>)}
          {renderIf(artistInfo["STUDIO phone number"] != "", <Text style={styles.textStyle}>{artistInfo["STUDIO phone number"]}</Text>)}
          {renderIf(artistInfo["Email Address"] != "", <Text style={styles.textStyle}>{artistInfo["Email Address"]}</Text>)}
          {renderIf(artistInfo["Website Address"] != "", <Text style={styles.textStyle}>{artistInfo["Website Address"]}</Text>)}
          <View style={{paddingTop: 8}} />
          {renderIf(artistInfo["medium"] != "", <Text style={styles.textStyle}>{artistInfo["medium"].toLowerCase()}</Text>)}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 20,
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
    borderTopWidth: 1,
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
    fontSize: 12,
    color: 'white',
  },
  textStyleTitle: {
    fontFamily: "FrancophilSans",
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
}

export default ArtistListItem;
