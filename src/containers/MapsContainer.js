import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
//TODO: how to turn off the header for this specific one

export default class MapsContainer extends React.Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.8526,
            longitude: 82.3940,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}
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
