import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './screens/bookcase/Bookcase';
import Explore from './screens/explore/Explore';
import AddBook from './screens/addBook/AddBook';
import Lists from './screens/lists/Lists';
import Profile from './screens/profile/Profile';
import EditBook from './screens/editBook/EditBook';

let screen = Dimensions.get('window');

export const Tabs = TabNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: {
      tabBarLabel: 'Bookcase',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      ),
    },
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-map-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      ),
    },
  },
  'Add Book': {
    screen: AddBook,
    navigationOptions: {
      tabBarLabel: 'Add Book',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-add-circle-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      ),
    },
  },
  Lists: {
    screen: Lists,
    navigationOptions: {
      tabBarLabel: 'Lists',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" type="entypo" size={28} color={tintColor} />
      ),
    },
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-person-outline"
          type="ionicon"
          size={28}
          color={tintColor}
        />
      ),
    },
  },
});

export const BookcaseStack = StackNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  EditBook: {
    screen: EditBook,
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false,
    }),
  },
});

export const CreateRootNavigator = StackNavigator({
  BookcaseStack: {
    screen: BookcaseStack,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
});
