import { Colors } from "@/constants/Colors";
import { Routes } from "@/constants/Routes";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import backgroundImage from "@/assets/images/background.webp";
import ButtonUI from "@/components/Button";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.area}>
          <View style={styles.textView}>
            <Text style={styles.heading}>
              Explore the World's Tallest Peaks 🗻
            </Text>
            <Text style={styles.description}>
              "When you climb a mountain, you come back down as a different
              person"
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonUI
              title="Explore Content"
              onPress={() => router.push(Routes.HOME)}
            />
            <ButtonUI
              variant="outlined"
              title="Create Account"
              onPress={() => router.push(Routes.HOME)}
            />
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  area: {
    flex: 2,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    marginTop: 32,
  },
  textView: {
    gap: 16,
  },
  headingContainer: {
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    color: Colors.dark.text,
    fontWeight: "bold",
    fontSize: 32,
  },
  description: {
    textAlign: "center",
    color: Colors.dark.text,
    fontWeight: "400",
    fontSize: 16,
    marginTop: 12,
    fontStyle: "italic",
  },
  buttonContainer: {
    marginTop: "auto",
    gap: 16,
  },
});
