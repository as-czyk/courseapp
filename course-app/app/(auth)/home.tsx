import ButtonUI from "@/components/Button";
import { Routes } from "@/constants/Routes";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <ButtonUI title={"Back"} onPress={() => router.push(Routes.INDEX)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
