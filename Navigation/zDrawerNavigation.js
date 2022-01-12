import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Weapons from "../components/Weapons";
import zFilterViews from '../components/ConstructList/zFilterView'
import Memories from '../components/Memories/index';
import memoryPage from '../components/Memories/memoryPage'

const Drawer = createDrawerNavigator();

function myDraw(){
    return(
        <Drawer.Navigator screenOptions={{drawerType: 'slide'}, {drawerStyle: {backgroundColor: '#121212'}, drawerLabelStyle: {color: 'white'}}} >
            <Drawer.Screen name="ConstructsDrawer" component={zFilterViews} 
            options={{title: 'Constructs', 
                      headerStyle: { backgroundColor: '#121212', height: 80},
                      headerTintColor: 'white',
                      
                      }}/>
                         
            <Drawer.Screen name="WeaponsDrawer" component={Weapons} 
            options={{title: 'Weapons', 
                        headerStyle: { backgroundColor: '#121212', height: 80},
                        headerTintColor: 'white',

            }}
            />
            <Drawer.Screen name="MemoriesDrawer" component={memoryPage} 
            options={{title: 'Memories', 
                        headerStyle: { backgroundColor: '#121212', height: 80},
                        headerTintColor: 'white',

            }}
            />
        </Drawer.Navigator>
    )
}

export default myDraw;