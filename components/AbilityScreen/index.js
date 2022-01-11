import React from "react";
import {useContext, createContext} from 'react';
import {View, FlatList, Text, Image, ImageBackground, ScrollView} from 'react-native';
import ListOfAbilities from "./ListOfAbilities";
import HomeScreen from "../HomeScreen";
import styles from "./styles";
import MyTabs from "./topTabBarNavigation";
import { AbilityContext } from "./context"; 

const AbilityPage = ({route, navigation}) => {
    const {combat, construct_Image, construct_Name, construct_Model, construct_Rank, construct_Element, construct_Type, memories, weapons } = route.params;
    const colorOfBorder = construct_Rank === 'S' ? '#CF3B00': construct_Rank === 'A' ? '#821890': '#0147A4' ; 

    return(
        <View style={styles.container}>

                <View style={[styles.constructMiniDesc, {borderColor: colorOfBorder}]}>
                    <Image source={construct_Image} style={styles.constructIcon}/>
                    <View style={styles.constructInfo}>
                    <Text style={styles.constructName}> {construct_Name} </Text>
                    <Text style={styles.constructModel}> {construct_Model} </Text>
                    <Text style={styles.constructRank}> {construct_Rank} </Text>
                    <Text style={styles.constructElement}> {construct_Element} </Text>
                    <Text style={styles.constructType}> {construct_Type} </Text>
                    </View>
                </View >
            
            
               <View style={[styles.tabsView, {borderColor: colorOfBorder, backgroundColor: '#121212'}]}>
                <AbilityContext.Provider value={route.params}>
                    <MyTabs />
                </AbilityContext.Provider>
               </View>
               
               

        </View>
    );
};

export default AbilityPage;