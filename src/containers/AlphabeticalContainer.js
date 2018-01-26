import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import { screen } from '../config/Metrics';

import _ from 'lodash';
import { sortByName, handicapAccessible, openFriday } from '../redux/actions/ArtistListActions';

//TODO: how to turn off the header for this specific one

class AlphabeticalContainer extends React.Component {


  navigateAndSort = (sortFunction) => {
      sortFunction;
      this.props.navigation.navigate('ArtistListContainer');
  }

  render() {
    const { columnStyle, rowStyle, buttonStyle, buttonTextStyle, backgroundImageStyle} = styles;
    return(
      <View style={{flex: 1}}>
        <Image
            style={backgroundImageStyle}
            source={require('../assets/images/backgrounds/mediumbackground.jpeg')}
          >
          <ScrollView >
            <View style={{flex: 1, width: screen.width, alignItems: 'center'}}>
            <Button
              title={'A'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.sortByName('A'))}
            />
            <Button
              title={'B'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.sortByName('B'))}

            />
            <Button
              title={'C'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('C'))}
            />
            <Button
              title={'D'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('D'))}
            />
            <Button
              title={'E'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('E'))}
            />
            <Button
              title={'F'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('F'))}
            />
            <Button
              title={'G'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('G'))}
            />
            <Button
              title={'H'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('H'))}
            />
            <Button
              title={'I'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('I'))}
            />
            <Button
              title={'J'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('J'))}
            />
            <Button
              title={'K'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('K'))}
            />
            <Button
              title={'L'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('L'))}
            />
            <Button
              title={'M'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('M'))}
            />
            <Button
              title={'N'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('N'))}
            />
            <Button
              title={'O'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('O'))}
            />
            <Button
              title={'P'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('P'))}
            />
            <Button
              title={'Q'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('Q'))}
            />
            <Button
              title={'R'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('R'))}
            />
            <Button
              title={'S'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('S'))}
            />
            <Button
              title={'T'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('T'))}
            />
            <Button
              title={'U'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('U'))}
            />
            <Button
              title={'V'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('V'))}
            />
            <Button
              title={'W'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('W'))}
            />
            <Button
              title={'X'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('X'))}
            />
            <Button
              title={'Y'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('Y'))}
            />
            <Button
              title={'Z'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('Z'))}
            />
          </View>


          </ScrollView>
        </Image>
      </View>
    )
  }
};

  const mapStateToProps = (state) => {
    return ({ artists: state.artistList });
  };

export default connect(mapStateToProps, { sortByName, handicapAccessible, openFriday })(AlphabeticalContainer);

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 120
    // flex: 1,
    // paddingTop: 10
  },
  rowStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 90,
    paddingBottom: 20,
    paddingTop: 20
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    width: screen.width * .8,
    height: 50,
    // paddingTop: 10,
    marginTop: 10
    // flex: 1
    // height: screen.height * .082

  },
  buttonTextStyle: {
    fontSize: 18,
    fontFamily: 'sweez',
    fontWeight: '600'
    // lineHeight: 1.2,
    // color: 'rgb(255, 255, 255)',
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center'
  },
  copyStyle: {
    fontSize: 10,
    fontFamily: 'FrancophilSans',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    backgroundColor: 'transparent'
},
doorStyle: {
  resizeMode: 'contain',
  width: screen.width*.85,
  height: null,
  flex: 1,
  paddingTop: 0,

},
}
