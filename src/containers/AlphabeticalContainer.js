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
<<<<<<< HEAD
      this.props.navigation.navigate('ArtistListContainer', {title: 'name'});
=======
      this.props.navigation.navigate('ArtistListContainer');
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
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
<<<<<<< HEAD
              title={'a'}
=======
              title={'A'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.sortByName('A'))}
            />
            <Button
<<<<<<< HEAD
              title={'b'}
=======
              title={'B'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.sortByName('B'))}

            />
            <Button
<<<<<<< HEAD
              title={'c'}
=======
              title={'C'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('C'))}
            />
            <Button
<<<<<<< HEAD
              title={'d'}
=======
              title={'D'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('D'))}
            />
            <Button
<<<<<<< HEAD
              title={'e'}
=======
              title={'E'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('E'))}
            />
            <Button
<<<<<<< HEAD
              title={'f'}
=======
              title={'F'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('F'))}
            />
            <Button
<<<<<<< HEAD
              title={'g'}
=======
              title={'G'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('G'))}
            />
            <Button
<<<<<<< HEAD
              title={'h'}
=======
              title={'H'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('H'))}
            />
            <Button
<<<<<<< HEAD
              title={'i'}
=======
              title={'I'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('I'))}
            />
            <Button
<<<<<<< HEAD
              title={'j'}
=======
              title={'J'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('J'))}
            />
            <Button
<<<<<<< HEAD
              title={'k'}
=======
              title={'K'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('K'))}
            />
            <Button
<<<<<<< HEAD
              title={'l'}
=======
              title={'L'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('L'))}
            />
            <Button
<<<<<<< HEAD
              title={'m'}
=======
              title={'M'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('M'))}
            />
            <Button
<<<<<<< HEAD
              title={'n'}
=======
              title={'N'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('N'))}
            />
            <Button
<<<<<<< HEAD
              title={'o'}
=======
              title={'O'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('O'))}
            />
            <Button
<<<<<<< HEAD
              title={'p'}
=======
              title={'P'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('P'))}
            />
            <Button
<<<<<<< HEAD
              title={'q'}
=======
              title={'Q'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('Q'))}
            />
            <Button
<<<<<<< HEAD
              title={'r'}
=======
              title={'R'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('R'))}
            />
            <Button
<<<<<<< HEAD
              title={'s'}
=======
              title={'S'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('S'))}
            />
            <Button
<<<<<<< HEAD
              title={'t'}
=======
              title={'T'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('T'))}
            />
            <Button
<<<<<<< HEAD
              title={'u'}
=======
              title={'U'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('U'))}
            />
            <Button
<<<<<<< HEAD
              title={'v'}
=======
              title={'V'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('V'))}
            />
            <Button
<<<<<<< HEAD
              title={'w'}
=======
              title={'W'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('W'))}
            />
            <Button
<<<<<<< HEAD
              title={'x'}
=======
              title={'X'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('X'))}
            />
            <Button
<<<<<<< HEAD
              title={'y'}
=======
              title={'Y'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('Y'))}
            />
            <Button
<<<<<<< HEAD
              title={'z'}
=======
              title={'Z'}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
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
