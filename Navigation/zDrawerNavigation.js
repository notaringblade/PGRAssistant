import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StartScreen from "../components/StartScreen/index";
import ConstructHomePage from "../components/ConstructList/index";
import memoryPage from "../components/Memories/memoryPage";
import WeaponListDisplay from "../components/Weapons/weaponListDisplay";
import EventsIndex from "../components/Events/index";
import TeamsScreen from "../components/Teams/TeamsScreen";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

function myDraw() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: "slide",
        drawerStyle: { backgroundColor: "#121212" },
        drawerLabelStyle: { color: "white" },
        swipeEdgeWidth: 200
      }}
      
    >
      <Drawer.Screen
        name="StartScreen"
        component={StartScreen}
        
        options={{
          title: "Gray Raven Assistant",
          headerStyle: { backgroundColor: "#121212", height: 80 },
          headerTintColor: "white",
        }}
      />

      <Drawer.Screen
        name="ConstructsDrawer"
        component={ConstructHomePage}
        initialParams= {{characterIndex: 0}}
        options={{
          title: "Constructs",
          headerStyle: { backgroundColor: "#121212", height: 80 },
          headerTintColor: "white",
          
        }}
      />
      <Drawer.Screen
        name="WeaponsDrawer"
        component={WeaponListDisplay}
        initialParams= {{weaponIndex: 0}}
        options={{
          title: "Weapons",
          headerStyle: { backgroundColor: "#121212", height: 80 },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="MemoriesDrawer"
        component={memoryPage}
        initialParams= {{memoryIndex: 0}}
        options={{
          title: "Memories",
          headerStyle: { backgroundColor: "#121212", height: 80 },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="EventsDrawer"
        component={EventsIndex}
        options={{
          title: "Events",
          headerStyle: { backgroundColor: "#121212", height: 80 },
          headerTintColor: "white",
        }}
      />
      <Drawer.Screen
        name="TeamsDrawer"
        component={TeamsScreen}
        options={{
          title: "Teams",
          headerStyle: { backgroundColor: "#121212", height: 80 },
          headerTintColor: "white",
        }}
      />
    </Drawer.Navigator>
  );
}

export default myDraw;
