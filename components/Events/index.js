import React from "react";
import {Text, View, FlatList} from "react-native";
import styles from "./styles";
import ListOfEvents from "./ListOfEvents"
import EventList from "./EventList"
import CompleteFlatList from "react-native-complete-flatlist";

const EventIndex = () => {
    const ItemSeparator = () =>{
        return(
            <View style={styles.ItemSeparator} />    
        )
    }
    return(

        <View style={styles.view}>
            <View style={styles.list}>
                <CompleteFlatList 
                    slide = {'left'}
                    data={ListOfEvents}
                    renderItem={({item}) => <EventList events={item}/>}
                    keyExtractor={(item) => item.key}
                    backgroundStyles={styles.backgroundStyles}
                    renderSeparator={ItemSeparator}
                />
        </View>
        </View>
    )
}

export default EventIndex;