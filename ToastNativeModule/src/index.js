/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Toast from "./components/Toast";
import { NativeModules } from "react-native";
var TaskManager = NativeModules.TaskManager;

type Props = {};
export default class App extends Component<Props> {
  showText(message) {
    Toast.showText(message, Toast.SHORT);
  }

  handleCalendar() {
    CalendarManager.addEvent("Birthday Party", "4 Privet Drive, Surrey");
  }

  handleClick = () => {
    this.showText("Hello World");
  };

  handleClickCallbackSuccess = () => {
    const sucessHandler = (name, email, age) =>
      this.showText(
        `Hi my name is ${name} and I'm ${age} old, send me an email on ${email}`
      );
    const errorHandler = message => this.showText(message);
    Toast.doCallbackTask(99, sucessHandler, errorHandler);
  };

  handleClickCallbackError = () => {
    const sucessHandler = (name, email, age) =>
      this.showText(
        `Hi my name is ${name} and I'm ${age} old, send me an email on ${email}`
      );
    const errorHandler = message => this.showText(message);
    Toast.doCallbackTask(100, sucessHandler, errorHandler);
  };

  handleClickPromise = () => {
    Toast.doPromiseTask(100)
      .then(res =>
        this.showText(
          `Hi, ${res.name}, can I send you an email on ${res.email}`
        )
      )
      .catch(e => this.showText(`${JSON.stringify(e)}`));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{JSON.stringify(Toast)}</Text>
        <Button
          onPress={this.handleCalendar}
          title="Call Native iOS Function"
        />
        <Button onPress={this.handleClick} title="Call Native Function" />
        <Button
          onPress={this.handleClickCallbackSuccess}
          title="Call Native Function With Callback Success"
          color="green"
        />
        <Button
          onPress={this.handleClickCallbackError}
          title="Call Native Function With Callback Error"
          color="red"
        />
        <Button
          onPress={this.handleClickPromise}
          title="Call Native Function With Promise"
          color="blue"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
