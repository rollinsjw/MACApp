
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider, connect } from 'react-redux';
import {createStore} from 'redux';
import {provider} from 'react-redux';
import { StackNavigator, addNavigationHelpers} from 'react-navigation';
import ArtistInfo from './components/ArtistInfo';
import reducers from './redux/reducers';
import { AppNavigator } from './config/router';

class App extends React.Component {

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
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
