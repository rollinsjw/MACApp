import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';


const ArtistListItem = ({artistInfo, navigate}) => {
<<<<<<< HEAD
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
=======
  return(
    <TouchableOpacity
      onPress= {() => navigate()}
      style={{paddingRight: 40, paddingLeft: 40}}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
      >
      <View style={styles.rowStyle}>
        <Image source={artistInfo["Img"]} style={{ height: 80, width: 80,resizeMode: 'contain'}}/>
        <View style={styles.columnStyle}>
<<<<<<< HEAD
          <Text style={styles.textStyleTitle}>{artistInfo["First Name"]} {artistInfo["Last Name"]} - #{artistInfo["STUDIO#"]}</Text>
          {renderIf(artistInfo["STUDIO Address"] != "", <Text style={styles.textStyle}>{artistInfo["STUDIO Address"]}</Text>)}
          {renderIf(artistInfo["STUDIO City, State, Zip"] != "", <Text style={styles.textStyle}>{artistInfo["STUDIO City, State, Zip"]}</Text>)}
          {renderIf(artistInfo["STUDIO phone number"] != "", <Text style={styles.textStyle}>{artistInfo["STUDIO phone number"]}</Text>)}
          {renderIf(artistInfo["Email Address"] != "", <Text style={styles.textStyle}>{artistInfo["Email Address"]}</Text>)}
          {renderIf(artistInfo["Website Address"] != "", <Text style={styles.textStyle}>{artistInfo["Website Address"]}</Text>)}
          <View style={{paddingTop: 8}} />
          {renderIf(artistInfo["medium"] != "", <Text style={styles.textStyle}>{artistInfo["medium"].toLowerCase()}</Text>)}
=======
          <Text style={styles.textStyleTitle}>{artistInfo["First Name"]} {artistInfo["Last Name"]} -# {artistInfo["STUDIO#"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["STUDIO Address"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["STUDIO City, State, Zip"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["STUDIO phone number"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["Email Address"]}</Text>
          <Text style={styles.textStyle}>{artistInfo["Website Address"]}</Text>

>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
<<<<<<< HEAD
    paddingLeft: 20,
=======
    paddingLeft: 30,
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
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
<<<<<<< HEAD
    borderTopWidth: 1,
=======
    borderTopWidth: .5,
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
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
<<<<<<< HEAD
    fontSize: 12,
=======
    fontSize: 14,
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
    color: 'white',
  },
  textStyleTitle: {
    fontFamily: "FrancophilSans",
<<<<<<< HEAD
    fontSize: 20,
    fontWeight: 'bold',
=======
    fontSize: 18,
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
    color: 'white'
  }
}

export default ArtistListItem;
