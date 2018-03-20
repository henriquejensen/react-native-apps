/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Home, Chat } from './src/components';

const styles = StyleSheet.create({
  sceneContainer: {
    paddingTop: Platform.OS === 'ios' ? 64 : 54,
  },
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" style={styles.sceneContainer}>
          <Scene key="home" component={Home} title="Home" />
          <Scene key="chat" component={Chat} title="Chat" />
        </Scene>
      </Router>
    );
  }
}
