import React from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from 'react-native';

const CustomDrawer = (props) =>{
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <Text style={{color: 'white', position: "absolute", paddingTop: 45, padding: 20}}>Event: Grand Blue</Text>
                <ImageBackground source={require('../assets/Images/Events/GrandBlue.png')} style={{padding: 20, height: 110, resizeMode: 'contain'}}>
                </ImageBackground>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
                
                <TouchableOpacity style={{width: '45%'}} onPress={() => Linking.openURL('https://www.paypal.com/paypalme/notaringblade')}>
                <Text style={{color: 'white', padding: 20}}>
                    Support Me
                </Text>
                </TouchableOpacity>
        </View>
    )
}

export default CustomDrawer;