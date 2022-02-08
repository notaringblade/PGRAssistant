import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import CollapsibleView from '@eliav2/react-native-collapsible-view';

const EventList = (props) => {
    const {eventName, eventImage, currentEvent, Character1Name,Character1Image, Character2Name, Character2Image} = props.events;
    const expanded =  currentEvent === 'y'? true: false
    const borderColor = currentEvent === 'y'? '#C04F15': '#3D3D3D'

    return(
        <View style={styles.screenView}>
            <CollapsibleView title={<Text style={styles.eventName}>{eventName}</Text>} initExpanded={expanded} style={[styles.collapsibleView, {borderColor: borderColor}]}>
            <Image style={styles.eventImage} source={eventImage}/>
            <Text style={styles.eventName}>Chracters:</Text>
            <View style={styles.constructView}>
                <Text style={styles.eventName}>{Character1Name}</Text>
                <Image style={styles.ConstructImage} source={Character1Image}/>
                <Text style={[styles.eventName, {marginLeft: 250, position: 'absolute'}]}>{Character2Name}</Text>
                <Image style={[styles.ConstructImage, {marginLeft: 125, marginTop: -100}]} source={Character2Image}/>
            </View>
            </CollapsibleView>
        </View>

    )
}

export default EventList;