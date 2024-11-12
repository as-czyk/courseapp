import AppGradient from "@/components/AppGradient";
import { Colors } from "@/constants/Colors";
import { Mountain, MountainData } from "@/constants/MountainData";
import { MountainImages } from "@/constants/MountainImages";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <AppGradient colors={["#a6a6a6", "#ffffff"]}>
        <View style={{ paddingHorizontal: 20, marginVertical: 16 }}>
          <Text style={styles.heading}>Welcome Aron!</Text>
          <Text style={styles.description}>
            Explore all stories and details from peaks above 8000 meters.
          </Text>
        </View>
        <View>
          <FlatList
            data={MountainData}
            contentContainerStyle={styles.list}
            keyExtractor={(item: Mountain) => item.uid.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log(item.uid)}
                style={styles.mountainCard}
              >
                <ImageBackground
                  source={MountainImages[item.image.split(".")[0]]}
                  resizeMode="cover"
                  style={styles.backgroundImage}
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={styles.gradient}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  background: {
    flex: 1,
  },
  mountainCard: {
    height: 200, // Adjust height for better display of each item
    overflow: "hidden",
    marginVertical: 8, // Add vertical margin for spacing between items
    marginHorizontal: 16, // Add horizontal margin to separate from screen edges
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: {
    color: Colors.dark.text,
    fontWeight: "bold",
    fontSize: 32,
  },
  description: {
    color: Colors.dark.text,
    fontWeight: "400",
    fontSize: 16,
    marginTop: 12,
  },
});
