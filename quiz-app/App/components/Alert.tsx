import React from "react";
import { StyleSheet, View, Dimensions, Image, ViewStyle } from "react-native";

const screen = Dimensions.get("window");

type AlertProps = {
  correct: boolean;
  visible: boolean;
};

export default function Alert({ correct, visible }: AlertProps) {
  if (!visible) return null;

  let icon = require("../assets/close.png");
  let circleStyles: Array<ViewStyle> = [styles.circle];
  if (correct) {
    icon = require("../assets/check.png");
    circleStyles.push(styles.correct);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    backgroundColor: "#ff4136",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  correct: {
    backgroundColor: "#28a125"
  },
  icon: {
    width: screen.width / 3
  }
});
