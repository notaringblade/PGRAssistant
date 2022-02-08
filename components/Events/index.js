import React from "react";
import {Text, View, FlatList} from "react-native";
import styles from "./styles";
import ListOfEvents from "./ListOfEvents"
import EventList from "./EventList"
import memoryList from "../Memories/memoryList";

const EventIndex = () => {
    return(
        <View style={styles.screenView}>
            <FlatList 
                data={ListOfEvents}
                renderItem={({item}) => <EventList events={item}/>}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}

export default EventIndex;