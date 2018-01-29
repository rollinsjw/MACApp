import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider, connect } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import {provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { StackNavigator, addNavigationHelpers} from 'react-navigation';
import ArtistInfo from './components/ArtistInfo';
import reducers from './redux/reducers';
import { AppNavigator } from './config/router';

class App extends React.Component {

  componentWillMount() {
    const config = {
    apiKey: "AIzaSyB7JN4-mdvwFmOStz5kPnkoLzC1Ub-wAQU",
    authDomain: "macapp-ca440.firebaseapp.com",
    databaseURL: "https://macapp-ca440.firebaseio.com",
    projectId: "macapp-ca440",
    storageBucket: "macapp-ca440.appspot.com",
    messagingSenderId: "400236357643"
  };
  firebase.initializeApp(config);
}

  render() {
    return(
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends Component {

  render() {
    const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
