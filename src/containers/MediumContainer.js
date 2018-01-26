import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import _ from 'lodash';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { screen } from '../config/Metrics';
import { drawingAndPaper,
clayAndWood,
digitalArts,
fiberArts,
jewelryAndGlass,
mixedMedia,
painting,
printmaking,
sculptureAndMetal,
photographAndVideo
} from '../redux/actions/ArtistListActions';
//TODO: how to turn off the header for this specific one

class MediumContainer extends React.Component {

  navigateAndSort = (sortFunction, name) => {
      sortFunction;
      this.props.navigation.navigate('ArtistListContainer', {title: 'medium', medium: name});
  }

  render() {
    return(
      <Image
          style={styles.backgroundImageStyle}
          source={require( '../assets/images/backgrounds/mediumbackground.jpeg')}
        >
          <ScrollView contentContainerStyle={styles.containerStyle}>
            <View style={styles.columnStyle}>
              <Button
                title={'clay & wood'}
                color={'rgb(255, 255, 255)'}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                onPress={() => this.navigateAndSort(this.props.clayAndWood(), 'clay & wood')}
              />

              <Button
                backgroundColor={'rgba(51, 53, 61, .451)'}
                title={'digital arts'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                onPress={() => this.navigateAndSort(this.props.digitalArts(), 'digital arts')}
              />
              <Button
                title={'drawing & paper arts'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={() => this.navigateAndSort(this.props.drawingAndPaper(), 'drawing & paper')}
              />
              <Button
                title={'fiber arts'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={()=> this.navigateAndSort(this.props.fiberArts(), 'fiber arts')}
              />
              <Button
                title={'jewelry & glass'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={()=> this.navigateAndSort(this.props.jewelryAndGlass(), 'jewelry & glass')}
              />
              <Button
                title={'mixed media'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={()=> this.navigateAndSort(this.props.mixedMedia(), 'mixed media')}
              />
              <Button
                title={'painting'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={()=> this.navigateAndSort(this.props.painting(), 'painting')}
              />
              <Button
                title={'printmaking'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={()=> this.navigateAndSort(this.props.printmaking(), 'printmaking')}
              />
              <Button
                title={'photography & video'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={()=> this.navigateAndSort(this.props.photographAndVideo(), 'photography')}
              />
              <Button
                title={'sculpture & metal'}
                textStyle={styles.buttonTextStyle}
                style={styles.buttonStyle}
                backgroundColor={'rgba(51, 53, 61, .451)'}
                onPress={()=> this.navigateAndSort(this.props.sculptureAndMetal(), 'sculpture')}
              />
            </View>
          </ScrollView>
        </Image>
    )
  }
}


const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps, {
  drawingAndPaper,
  clayAndWood,
  digitalArts,
  fiberArts,
  jewelryAndGlass,
  mixedMedia,
  painting,
  printmaking,
  sculptureAndMetal,
  photographAndVideo
})(MediumContainer);


const styles = {
  backgroundImageStyle: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center'
  },

  doorStyleView: {
    // resizeMode: 'contain',
    width: screen.width*.85,
    flex: .6,
    paddingTop: 0,
  },
  containerStyle: {
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      // flex: 1,
      // alignItems: 'center'
      // flex: 1,
      // paddingTop: 10
      width: screen.width
  },
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center'
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
    padding: 50
  },
  textRowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    width: screen.width * .627,
    marginTop: 10
    // height: screen.height * .082

  },
  buttonTextStyle: {
    fontSize: 18,
    fontFamily: 'sweez',
    fontWeight: '600'
    // lineHeight: 1.2,
    // color: 'rgb(255, 255, 255)',
  },
  logoImageStyle: {
    width: '80%'
  },
  clearBackground: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  openStyle: {
    color: 'rgb(219, 187, 98)',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1}
  },
  copyStyle: {
    fontSize: 10,
    fontFamily: 'FrancophilSans',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    backgroundColor: 'transparent'

}

}
