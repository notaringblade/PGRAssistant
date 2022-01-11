import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AbilityPage from "../components/AbilityScreen/index";
import Drawer from './zDrawerNavigation';
import { View } from "react-native";
import Weapons from '../components/Weapons/index'
import Memories from '../components/Memories/index';



const Stack = createNativeStackNavigator();

export default function Navigator (){
    return(
        <View style={{flex: 1, backgroundColor: '#121212'}}> 
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name= 'Home' component={Drawer} 
                options={
                    {headerShown: false}}
                />   
                <Stack.Screen name="Ability" component={AbilityPage} 
                    options={
                        {title: '',
                         headerStyle: {
                             backgroundColor: '#121212',
                         },
                         headerTintColor: 'white',
                        }
                    }
                />

                <Stack.Screen name="Weapons" component={Weapons} 
                    options={{title: 'Weapons', 
                        headerStyle: { backgroundColor: '#121212', height: 80},
                        headerTintColor: 'white',

                    }}
                
                />

                <Stack.Screen name="Memories" component={Memories} 
                    options={{title: 'Memories', 
                        headerStyle: { backgroundColor: '#121212', height: 80},
                        headerTintColor: 'white',

                    }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
        </View>
    )
}