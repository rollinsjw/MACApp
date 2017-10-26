import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
//TODO: how to turn off the header for this specific one

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
            <TouchableOpacity style={{backgroundColor: 'white', borderWidth: 1, flex: 1}} onPress={() => this.props.navigation.navigate('ArtistPageContainer', {artistInfo: mapArtist})}>
              <View style={{backgroundColor: 'blue', flex: 1}}>
                <Text>{mapArtist["Last Name"]}</Text>
              </View>
            </TouchableOpacity>
          )
        })
        return (
          <MapView.Marker
            coordinate={{
              latitude: Number(artist["Lat"]),
              longitude: Number(artist["Lng"])
            }} >
            {markers}
          </MapView.Marker>
        );
      }

      if(((nextArtist["Lat"] != artist["Lat"]) || (nextArtist["Lng"] != artist["Lng"]))){
        console.log(overLapItems)
        const tempItems = overLapItems;
        markers = tempItems.map(mapArtist => {
          return (
            <TouchableOpacity style={{backgroundColor: 'white', borderWidth: 1, flex: 1}} onPress={() => this.props.navigation.navigate('ArtistPageContainer', {artistInfo: mapArtist})}>
              <Text>{mapArtist["Last Name"]}</Text>
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
            <View>
              {markers.map(item =>{
                return(item);
              }
            )}
            </View>
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
};
