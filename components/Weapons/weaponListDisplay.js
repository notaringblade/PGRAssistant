import React from "react";
import {Image, Text, View, TouchableOpacity, FlatList, SectionList} from 'react-native';
import styles from "./styles";
import Weapons from "./index";
import weaponList from "./weaponList";
import CompleteFlatList from "react-native-complete-flatlist";

const WeaponListDisplay = () =>{

    const ItemSeparator = () =>{
        return(
            <View style={styles.ItemSeparator} />    
        )
    }
    return(
        <View style={styles.view}>
            <View style={styles.list}>
        <CompleteFlatList
            searchKey={['weaponName', 'weaponType']}
            slide = {'left'}
            data={weaponList}
            renderItem={({item}) => <Weapons weapons={item}/>}
            backgroundStyles={styles.backgroundStyles}
            searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
            renderSeparator={ItemSeparator}     
            
        />
        </View>
        </View>
    )
}
export default WeaponListDisplay;