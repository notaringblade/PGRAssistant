import React, {useState} from 'react'
import { View, Text, FlatList, Modal, TextInput, TouchableOpacity } from 'react-native'
import ListOfConstructs from './ListOfConstructs'
import HomeScreen from '../HomeScreen'
import styles from './styles';
import CompleteFlatList from 'react-native-complete-flatlist';
import { AdMobBanner} from 'expo-ads-admob';




const ConstructList  = ({navigation}) => {


    const ItemSeparator = () =>{
        return(
            <View style={styles.ItemSeparator} />    
        )
    }

    

    return (
        <View style={styles.list} >



            <CompleteFlatList 
                searchKey={['construct_Name', 'construct_Model']}
                data={ListOfConstructs.filter(ListOfConstructs => ListOfConstructs.construct_Rank === 'A')}
                renderItem={({item}) => <HomeScreen construct={item}/>}
                backgroundStyles={styles.backgroundStyles}
                searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
                renderSeparator={ItemSeparator}
                
            />

        <AdMobBanner
                bannerSize='banner'
                adUnitID='ca-app-pub-9019468619354770/3957692192'
                servePersonalizedAds = {false}
            />
        </View>
    )
}

export default ConstructList
