import React from "react";
import {View, Text, Image, ImageBackground} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) =>{
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <Text style={{color: 'white', position: "absolute", paddingTop: 45, padding: 20}}>Event: Grand Blue</Text>
                <ImageBackground source={require('../assets/Images/Events/GrandBlue.png')} style={{padding: 20, height: 110, resizeMode: 'contain'}}>
                </ImageBackground>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View>
                <Text style={{color: 'white', padding: 20}}>Support Me</Text>
            </View>
        </View>
    )
}

export default CustomDrawer;