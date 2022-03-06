import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AbilityPage from "../components/AbilityScreen/index";
import Drawer from "./zDrawerNavigation";
import { View } from "react-native";
import ConstructHomePage from "../components/ConstructList/index";
import memoryPage from "../components/Memories/memoryPage";
import memoryScreen from "../components/Memories/memoryScreen";
import WeaponListDisplay from "../components/Weapons/weaponListDisplay";
import warZoneListDisplay from "../components/Teams/WarZone/warZoneListDisplay";
import warZoneTeams from "../components/Teams/WarZone/warZoneTeams";
import PainCageScreen from "../components/Teams/PainCage";


const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Drawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Constructs"
            component={ConstructHomePage}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#121212",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Ability"
            component={AbilityPage}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#121212",
                height: 80
              },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="WeaponScreen"
            component={WeaponListDisplay}
            options={{
              title: "Weapons",
              headerStyle: { backgroundColor: "#121212", height: 80 },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="Memories"
            component={memoryPage}
            options={{
              title: "Memories",
              headerStyle: { backgroundColor: "#121212", height: 80 },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="MemoryScreen"
            component={memoryScreen}
            options={{
              title: "Memories",
              headerStyle: { backgroundColor: "#121212", height: 80 },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="WarZoneScreen"
            component={warZoneListDisplay}
            options={{
              title: "War Zone",
              headerStyle: { backgroundColor: "#121212", height: 80 },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="WarZoneTeams"
            component={warZoneTeams}
            options={{
              title: "War Zone Teams",
              headerStyle: { backgroundColor: "#121212", height: 80 },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="PainCageScreen"
            component={PainCageScreen}
            options={{
              title: "Pain Cage",
              headerStyle: { backgroundColor: "#121212", height: 80 },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
