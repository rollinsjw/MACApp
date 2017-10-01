import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
//TODO: how to turn off the header for this specific one

export default class MainMenu extends React.Component {
  render() {
    const { columnStyle, rowStyle, buttonStyle, H1, H3 } = styles;
    return(
      <View style={{flex: 1}}>
        <View style={columnStyle}>
          <View>
            <Text style={H1}>Greenville</Text>
            <Text style={H1}>Open Studios</Text>
            <Text style={H3}>November 11 & 12, 2017</Text>
          </View>
          <Button
            title={'Artists'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
            onPress={() => this.props.navigation.navigate('Artists')}
          />
          <Button
            title={'Maps'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
            onPress={() => this.props.navigation.navigate('Map')}
          />
          <Button
            title={'About'}
            textStyle={{textAlign: 'center'}}
            style={buttonStyle}
          />
          <Button
            title={'Sponsors'}
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

const styles = {
  columnStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    height: 50
  },
  H1: {
    textAlign: 'center',
    fontSize: 30
  },
  H3: {
    textAlign: 'center',
    fontSize: 20
  }
}
