import React from "react";
import memoryList from "./memoryList";
import MemoryStyle from './index';
import styles from "./styles";
import { View, FlatList } from "react-native";
import CompleteFlatList from "react-native-complete-flatlist";



const memoryListView = ({route}) => {

    const ItemSeparator = () =>{
        return(
            <View style={styles.ItemSeparator} />    
        )
    }
    const {memoryIndex} = route.params
    const getItemLayout =(data, index)=>{
        return{offset: 125 * index, length: 125, index}
    }
    return(
        
        <View style={styles.view}>
            <View style={styles.list}>
        <CompleteFlatList
            searchKey={['memoryName']}
            slide ={'Left'}
            data={memoryList}
            initialNumToRender = {39}
            getItemLayout = {getItemLayout}
            initialScrollIndex = {memoryIndex}
            renderItem={({item}) => <MemoryStyle memory={item}/>}
            keyExtractor={(item) => item.id}
            backgroundStyles={styles.backgroundStyles}
            searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
            renderSeparator={ItemSeparator}     
            refreshOnLoad = {false}
            
        />
            
        </View>
        </View>
    )
}
export default memoryListView;