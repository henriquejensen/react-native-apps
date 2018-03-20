import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Boookcase from './screens/bookcase/Bookcase';
import EditBook from './screens/editBook/EditBook';
import { CreateRootNavigator } from './router';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Book"
          onPress={() => this.props.navigation.navigate('Book')}
        />
      </View>
    );
  }
}

const DetailsScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Book: {
      screen: Boookcase,
    },
    EditBook: {
      screen: EditBook,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default class App extends React.Component {
  render() {
    return <CreateRootNavigator />;
  }
}
