import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
//TODO: how to turn off the header for this specific one

class MapsContainer extends React.Component {


  render() {

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
            this.props.artistList.map(artist => (
              <MapView.Marker
                coordinate={{
                  latitude: Number(artist["Lat"]),
                  longitude: Number(artist["Lng"])
                }}
                title={artist["First Name"] + " " + artist["Last Name"]}
              />
            ))
          }
        </MapView>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
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
