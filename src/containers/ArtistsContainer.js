import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
//TODO: how to turn off the header for this specific one

class ArtistsContainer extends React.Component {
  render() {
    const { columnStyle, rowStyle, buttonStyle} = styles;
    return(
      <View style={{flex: 1}}>
        <View style={columnStyle}>
          <Button
            title={'Artist by Last Name'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
          />
          <Button
            title={'Medium'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
          />
          <Button
            title={'Open Friday'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
          />
          <Button
            title={'Handicap Accessible'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
          />
        </View>
        <View style={rowStyle}>
          <SocialIcon type={'facebook'}/>
          <SocialIcon type={'twitter'}/>
          <SocialIcon type={'instagram'}/>
        </View>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return { artists: state.artistList }
}

export default connect(mapStateToProps, null)(ArtistsContainer);

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
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
    height: 50,
    marginTop: 50
  }
}
