import React from "react";
import {useContext, createContext} from 'react';
import {View, FlatList, Text, Image, ImageBackground, ScrollView} from 'react-native';
import ListOfAbilities from "./ListOfAbilities";
import HomeScreen from "../HomeScreen";
import styles from "./styles";
import MyTabs from "./topTabBarNavigation";
import { AbilityContext } from "./context"; 

const AbilityPage = ({route, navigation}) => {
    const {combat, construct_Image, construct_Name, construct_Model, construct_Rank, construct_Element, construct_Type, memories, weapons, stats } = route.params;
    const colorOfBorder = construct_Rank === 'S' ? '#C04F15': construct_Rank === 'A' ? '#AC54B9': '#0794BE' ; 

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
                <View style={[styles.stats, {borderColor: colorOfBorder}]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: colorOfBorder, borderRadius: 3, marginTop: -1}}>
                    <Text style={styles.statText}>HP</Text>
                    <Text style={styles.statText}>Crit</Text>
                    <Text style={styles.statText}>ATK</Text>
                    <Text style={styles.statText}>DEF</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 6}}>
                    <Text style={styles.statText}>{stats.HP}</Text>
                    <Text style={[styles.statText, {marginLeft: -10}]}>{stats.Crit}</Text>
                    <Text style={styles.statText}>{stats.ATK}</Text>
                    <Text style={styles.statText}>{stats.DEF}</Text>
                </View>
            </View>
            
            
               <View style={[styles.tabsView, {borderColor: colorOfBorder, backgroundColor: '#121212'}]}>
                <AbilityContext.Provider value={route.params}>
                    <MyTabs />
                </AbilityContext.Provider>
               </View>
               
               

        </View>
    );
};

export default AbilityPage;