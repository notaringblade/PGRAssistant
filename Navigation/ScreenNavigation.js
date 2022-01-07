import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ConstructList from "../components/ConstructList";
import AbilityPage from "../components/AbilityScreen/index";
import zFilterViews from '../components/ConstructList/zFilterView'
import Drawer from './zDrawerNavigation';
import { View } from "react-native";


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
            </Stack.Navigator>
        </NavigationContainer>
        </View>
    )
}