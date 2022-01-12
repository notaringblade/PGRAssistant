import React, {useState} from 'react'
import { View, Text, FlatList, Modal, TextInput, TouchableOpacity } from 'react-native'
import ListOfConstructs from './ListOfConstructs'
import HomeScreen from '../HomeScreen'
import styles from './styles';
import CompleteFlatList from 'react-native-complete-flatlist';


const ConstructList  = ({navigation}) => {

    

    const ItemSeparator = () =>{
        return(
            <View style={styles.ItemSeparator} />    
        )
    }
    

    return (


        <View style={styles.view}>
        <View style={styles.list} >
            <CompleteFlatList 
                searchKey={['construct_Name', 'construct_Model']}
                data={ListOfConstructs}
                renderItem={({item}) => <HomeScreen construct={item}/>}
                backgroundStyles={styles.backgroundStyles}
                searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
                renderSeparator={ItemSeparator}     
            />
        </View>
        </View>
    )
}

export default ConstructList
