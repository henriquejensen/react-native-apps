import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  ViewStyle,
  TextStyle
} from "react-native";

type SizeType = "double";
type ThemeType = "primary" | "secondary" | "accent";

type ButtonProps = {
  onPress: () => void;
  text: string;
  theme?: ThemeType;
  size?: SizeType;
};

const screen = Dimensions.get("window");
const marginButton = 5;
// Math.floor is because ios renders a line inside de bottom when a number is a float
const buttonWith = Math.floor(screen.width / 4 - marginButton * 2);

export default ({ onPress, text, theme = "primary", size }: ButtonProps) => {
  const buttonStyles: Array<ViewStyle> = [styles.button];
  const textStyles: Array<TextStyle> = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333",
    flex: 1,
    height: buttonWith,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: buttonWith,
    margin: marginButton
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 35
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});
