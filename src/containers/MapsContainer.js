import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

class MapsContainer extends React.Component {


  render() {
    artistList = _.sortBy(this.props.artistList, ["Lat", "Lng"]);
    console.log(artistList)

    var overLapItems = [];
    var previous = this.props.artistList[20];

    mapMarkers = artistList.map((artist, index, original) => {
      nextArtist = original[index + 1];

      overLapItems.push(artist)
      if(index + 1 == original.length){
        markers = overLapItems.map(mapArtist => {
          return (
            <TouchableOpacity style={styles.calloutItemStyle} onPress={() => this.props.navigation.navigate('ArtistPageContainer', {artistInfo: mapArtist})}>
              <Text style={styles.calloutTextStyle}>{mapArtist["Studio Name"]}, {mapArtist["First Name"]} {mapArtist["Last Name"]}</Text>
            </TouchableOpacity>
          )
        })
        return (
          <MapView.Marker
            coordinate={{
              latitude: Number(artist["Lat"]),
              longitude: Number(artist["Lng"])
            }}>
              <MapView.Callout tooltip={true}>
                <View style={styles.columnStyle}>
                  <View style={styles.calloutStyle}>
                    {markers.map(item =>{
                      return(item);
                    }
                  )}
                  </View>
                  {/* <View style={styles.arrowDown} /> */}
                </View>
              </MapView.Callout>
          </MapView.Marker>
        );
      }

      if(((nextArtist["Lat"] != artist["Lat"]) || (nextArtist["Lng"] != artist["Lng"]))){
        console.log(overLapItems)
        const tempItems = overLapItems;
        markers = tempItems.map(mapArtist => {
          return (
            <TouchableOpacity style={styles.calloutItemStyle} onPress={() => this.props.navigation.navigate('ArtistPageContainer', {artistInfo: mapArtist})}>
              <Text style={styles.calloutTextStyle}>{mapArtist["Studio Name"]}, {mapArtist["First Name"]} {mapArtist["Last Name"]}</Text>
            </TouchableOpacity>
          )
        })
        overLapItems = [];
        return (
          <MapView.Marker
            coordinate={{
              latitude: Number(artist["Lat"]),
              longitude: Number(artist["Lng"])
            }}>
              <MapView.Callout tooltip={true}>
                <View style={styles.columnStyle}>
                  <View style={styles.calloutStyle}>
                    {markers.map(item =>{
                      return(item);
                    }
                  )}
                  </View>
                  {/* <View style={styles.arrowDown} /> */}
                </View>
              </MapView.Callout>
          </MapView.Marker>
        );
      }
    })



    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.8526,
            longitude: -82.3940,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {
            mapMarkers
            // this.props.mapMarkers.map(artist => (
            //   <MapView.Marker
            //     coordinate={{
            //       latitude: Number(artist["Lat"]),
            //       longitude: Number(artist["Lng"])
            //     }}
            //     title={artist["First Name"] + " " + artist["Last Name"]}
            //   >
            //
            //   </MapView.Marker>
            // ))
          }
        </MapView>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps, null)(MapsContainer);


const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutStyle: {
    // flex: 1
    backgroundColor: 'rgb(65,65,65)',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgb(65,65,65)'

  },
  calloutStyleView: {
    // flex: 1,
    // paddingTop: 10,
    borderRadius: 7,
  },
  calloutTextStyle: {
    color: 'white',
    fontFamily: 'FrancophilSans'
  },
  calloutItemStyle: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgb(65,65,65)',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5
  },
  arrowDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'rgb(65,65,65)',
  },
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'center'
  }
};
