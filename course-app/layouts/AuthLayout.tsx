import React from "react";
import { View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import backgroundImage from "@/assets/images/background.webp";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default AuthLayout;
