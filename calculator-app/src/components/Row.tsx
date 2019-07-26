import React from "react";
import { View, StyleSheet } from "react-native";

type RowProps = {
  children: React.ReactNode;
};

const Row = ({ children }: RowProps) => (
  <View style={styles.row}>{children}</View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  }
});

export default Row;
