/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {provider} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import ArtistInfo from './components/ArtistInfo';
import reducers from './redux/reducers';


export default class Mac extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <ArtistInfo name={'jorge'} location = {'georgia'} medium= {'human skin'}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Mac', () => Mac);
