import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import _ from 'lodash';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import artists from '../data/artists';


const ASPECT_RATIO = Dimensions.get('window').width / Dimensions.get('window').height
const LATITUDE_DELTA = 0.0122

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapsContainer extends React.Component {
  constructor(props) {
    super(props)

    if(typeof this.props.navigation.state.params === "undefined"){
      this.state = {
        currentLocationLat: 0,
        currentLocationLng: 0,
        initialLat: 34.8526,
        initialLng: -82.3940
      }
    } else {
      this.state = {
        currentLocationLat: 0,
        currentLocationLng: 0,
        initialLat: this.props.navigation.state.params.artistInfo["Lat"],
        initialLng: this.props.navigation.state.params.artistInfo["Lng"]
      }
    }


  }
  watchID: ?number = null;
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if(typeof this.props.navigation.state.params === "undefined"){
        this.setState({
          currentLocationLat: parseFloat(position.coords.latitude),
          currentLocationLng: parseFloat(position.coords.longitude),
          initialLat: parseFloat(position.coords.latitude),
          initialLng: parseFloat(position.coords.longitude)
        });
      } else{
        this.setState({
          currentLocationLat: parseFloat(position.coords.latitude),
          currentLocationLng: parseFloat(position.coords.longitude)
        })
      }


      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          currentLocationLat: parseFloat(position.coords.latitude),
          currentLocationLng: parseFloat(position.coords.longitude)
        });
      }
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }


  render() {

    artistList = _.sortBy(artists, ["Lat", "Lng"]);

    var overLapItems = [];
    var previous = artists[20];


    mapMarkers = artistList.map((artist, index, original) => {
      nextArtist = original[index + 1];

      overLapItems.push(artist)
      if(index + 1 == original.length){
        markers = overLapItems.map(mapArtist => {
          return (
            <TouchableOpacity style={styles.calloutItemStyle} onPress={() => this.props.navigation.navigate('ArtistPageContainer', {artistInfo: mapArtist})}>

              <Text style={styles.calloutTextStyle}>{mapArtist["First Name"]} {mapArtist["Last Name"]}</Text>

            </TouchableOpacity>
          )
        })
        return (
          <MapView.Marker
            coordinate={{
              latitude: Number(artist["Lat"]),
              longitude: Number(artist["Lng"])
            }}>

            <View>
              <View style={styles.circleArrow} />
              <View style={styles.circle}>
                <Text>{artist["studioNumber"]}</Text>
              </View>
            </View>

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
        const tempItems = overLapItems;
        markers = tempItems.map(mapArtist => {
          return (
            <TouchableOpacity style={styles.calloutItemStyle} onPress={() => this.props.navigation.navigate('ArtistPageContainer', {artistInfo: mapArtist})}>

              <Text style={styles.calloutTextStyle}>{mapArtist["First Name"]} {mapArtist["Last Name"]}</Text>

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
              <View style={styles.circle}>
                <Text>{artist["studioNumber"]}</Text>
              </View>
              <View style={styles.circleArrow} />
            </View>

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
            latitude: this.state.initialLat,
            longitude: this.state.initialLng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
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
          <MapView.Marker
            coordinate={{
              latitude: this.state.currentLocationLat,
              longitude: this.state.currentLocationLng
            }}>
              <View style={styles.blueCircle}></View>
            </MapView.Marker>
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
    flex: 1,
    backgroundColor: 'rgb(65,65,65)',


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

    fontFamily: 'FrancophilSans',
    fontSize: 16

  },
  calloutItemStyle: {
    borderRadius: 7,
    // borderTopWidth: .5,
    // borderBottomWidth: .5,
    // borderColor: 'white',
    padding: 2,
    paddingLeft: 5,

    paddingRight: 5,
    borderBottomWidth: 1,
    borderColor: 'white',
    height: 30,
    justifyContent: 'center'

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
  circle: {
    width: 30,
    height: 30,
    top: -17,
    borderRadius: 15,
    backgroundColor: 'rgb(223,184,89)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleArrow: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: 8,
    left: 5.5,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'rgb(223,184,89)',
  },
  columnStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 200
    // flex: 1

  },
  blueCircle: {
    width: 15,
    height: 15,
    top: -17,
    borderRadius:7,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
};
