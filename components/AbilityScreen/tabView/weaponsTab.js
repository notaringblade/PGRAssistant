import CollapsibleView from "@eliav2/react-native-collapsible-view";
import React from "react";
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { AbilityContext } from "../context";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";




const MemoryTab = () =>{

    const navigation = useNavigation();

    const Ability = useContext(AbilityContext)
    const borderColor = Ability.weapons.rarity === '6' ? '#C9481E': '#CC7218';

    const onClick =()=>{
        navigation.navigate('WeaponScreen')
        
    }

    return(

        <ScrollView style={styles.tabView}>
            <TouchableOpacity onPress={onClick}>
            <View style={{borderColor: borderColor, borderWidth: 3, borderRadius: 20, margin: 5}}>
                <Image source={Ability.weapons.WeaponIcon} style={[styles.abilityIcon, {width: 125, height: 125}]} />
                <View style= {styles.itemView}>
                    <Text style={styles.itemDescription}>{Ability.weapons.WeaponType}</Text>
                    <Text style={styles.itemDescription}>{Ability.weapons.WeaponName}</Text>
                    <Text style={styles.itemDescription}>{Ability.weapons.rarity}</Text>

                </View>
            </View>
            </TouchableOpacity>
        </ScrollView>

    );
};

export default MemoryTab;