import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EditBook extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const { title, author } = params || {};
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.title}>Author: {author}</Text>
      </View>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
