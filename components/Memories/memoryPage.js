import React from "react";
import memoryList from "./memoryList";
import MemoryStyle from './index';
import styles from "./styles";
import { View, FlatList } from "react-native";
import CompleteFlatList from "react-native-complete-flatlist";


const memoryListView = () => {

    const ItemSeparator = () =>{
        return(
            <View style={styles.ItemSeparator} />    
        )
    }

    return(
        
        <View style={styles.view}>
            <View style={styles.list}>
        <CompleteFlatList
            searchKey={['memoryName']}
            data={memoryList}
            renderItem={({item}) => <MemoryStyle memory={item}/>}
            keyExtractor={(item) => item.id}
            backgroundStyles={styles.backgroundStyles}
            searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
            renderSeparator={ItemSeparator}     
        />
        </View>
        </View>
    )
}
export default memoryListView;