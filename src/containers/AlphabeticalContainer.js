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
      this.props.navigation.navigate('ArtistListContainer', {title: 'name'});

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
              title={'a'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.sortByName('A'))}
            />
            <Button
              title={'b'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() => this.navigateAndSort(this.props.sortByName('B'))}

            />
            <Button
              title={'c'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('C'))}
            />
            <Button
              title={'d'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('D'))}
            />
            <Button
              title={'e'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('E'))}
            />
            <Button
              title={'f'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('F'))}
            />
            <Button
              title={'g'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('G'))}
            />
            <Button
              title={'h'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('H'))}
            />
            <Button
              title={'i'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('I'))}
            />
            <Button
              title={'j'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('J'))}
            />
            <Button
              title={'k'}
              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('K'))}
            />
            <Button
              title={'l'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('L'))}
            />
            <Button
              title={'m'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('M'))}
            />
            <Button
              title={'n'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('N'))}
            />
            <Button
              title={'o'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('O'))}
            />
            <Button
              title={'p'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('P'))}
            />
            <Button
              title={'q'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('Q'))}
            />
            <Button
              title={'r'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('R'))}
            />
            <Button
              title={'s'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('S'))}
            />
            <Button
              title={'t'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('T'))}
            />
            <Button
              title={'u'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('U'))}
            />
            <Button
              title={'v'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('V'))}
            />
            <Button
              title={'w'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('W'))}
            />
            <Button
              title={'x'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('X'))}
            />
            <Button
              title={'y'}

              textStyle={buttonTextStyle}
              style={buttonStyle}
              color={'rgb(255, 255, 255)'}
              backgroundColor={'rgba(51, 53, 61, .451)'}
              onPress={() =>this.navigateAndSort(this.props.sortByName('Y'))}
            />
            <Button
              title={'z'}

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
