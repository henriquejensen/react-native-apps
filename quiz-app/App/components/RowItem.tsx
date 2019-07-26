import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type RowItemProps = {
  onPress: () => void;
  name: string;
  color: string;
};

export const RowItem = ({ onPress = () => {}, name, color }: RowItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.row, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36b1f0",
    marginBottom: 2
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "600"
  }
});
