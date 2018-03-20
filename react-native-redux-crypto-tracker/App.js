import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import store from './src/store/store';
import { Header, Crypto } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header />
          <Crypto />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
