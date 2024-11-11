import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonVariant = "outlined" | "default";
interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
  variant?: ButtonVariant;
}

const ButtonUI = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
  variant = "default",
}: CustomButtonProps) => {
  const container = [
    buttonStyles.container,
    buttonStyles[variant],
    { borderWidth: 1 },
  ];
  const text = [buttonStyles.buttonText, buttonStyles[variant]];

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={container}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    borderRadius: 12,
    minHeight: 52,
    justifyContent: "center",
    alignItems: "center",
  },

  default: {
    backgroundColor: "#FFFFFF",
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: "#FFFFFF",
    color: Colors.dark.text,
  },
  buttonText: {
    color: Colors.light.text,
    fontWeight: "600",
    fontSize: 18,
  },
});

export default ButtonUI;
