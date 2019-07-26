import React, { ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

type ButtonType = {
  text: string;
  onPress: () => void;
};

type ButtonContainerType = {
  children: ReactNode;
};

export function Button({ text, onPress = () => {} }: ButtonType) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export function ButtonContainer({ children }: ButtonContainerType) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between"
  }
});
