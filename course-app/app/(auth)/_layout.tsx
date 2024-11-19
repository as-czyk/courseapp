/* Dieses TabsLayout ist die Komponente für die untere Navigationsleiste der App. 
Es wird das "expo-router" Tabs-Element verwendet, um die Struktur der Tabs zu definieren.
Die Icons stammen aus dem Feather-Iconset und werden für jedes Tab individuell angezeigt.

Jeder Tab hat einen spezifischen Namen (für die Navigation), ein Label (sichtbar in der Leiste)
und ein Icon, das die Funktion des jeweiligen Tabs symbolisiert.
Die Kopfzeile (Header) ist für alle Tabs deaktiviert, und die Farbe des aktiven Tabs ist schwarz. */

import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <Feather name="camera" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarLabel: "Bucket List",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
