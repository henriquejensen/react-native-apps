import React from "react";
import { ScrollView, StyleSheet, StatusBar } from "react-native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";

import { RowItem } from "../components/RowItem";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

type QuizIndexProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

export default ({ navigation }: QuizIndexProps) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />

      <RowItem
        color="#36b1f0"
        name="Space"
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Space",
            questions: spaceQuestions,
            color: "#36b1f0"
          })
        }
      />
      <RowItem
        color="#799496"
        name="Westerns"
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Westerns",
            questions: westernsQuestions,
            color: "#799496"
          })
        }
      />
      <RowItem
        color="#49475b"
        name="Computers"
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Computers",
            questions: computerQuestions,
            color: "#49475b"
          })
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {}
});
