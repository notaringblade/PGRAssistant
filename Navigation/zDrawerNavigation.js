import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Weapons from "../components/Weapons";
import Home from '../components/ConstructList/index'
import zFilterViews from '../components/ConstructList/zFilterView'
import styles from "../components/Weapons/styles";


const Drawer = createDrawerNavigator();

function myDraw(){
    return(
        <Drawer.Navigator screenOptions={{drawerType: 'slide'}, {drawerStyle: {backgroundColor: '#121212'}, drawerLabelStyle: {color: 'white'}}} >
            <Drawer.Screen name="Constructs" component={zFilterViews} 
            options={{title: 'Constructs', 
                      headerStyle: { backgroundColor: '#121212', height: 80},
                      headerTintColor: 'white',
                      
                      }}/>
                         
            <Drawer.Screen name="Weapons" component={Weapons} 
            options={{title: 'Weapons', 
                        headerStyle: { backgroundColor: '#121212', height: 80},
                        headerTintColor: 'white',

            }}
            />
        </Drawer.Navigator>
    )
}

export default myDraw;