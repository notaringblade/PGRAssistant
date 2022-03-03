import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { useNavigation } from "@react-navigation/native";


const EventList = (props) => {
    const {eventName, eventImage, currentEvent, Character1Name,Character1Image, Character2Name, Character2Image, Character3Name, Character3Image, amountOfCharacters} = props.events;
    const expanded =  currentEvent === 'y'? true: false
    const borderColor = currentEvent === 'y'? '#C04F15': '#3D3D3D'
    const status = currentEvent === 'y'? '(Currently Active)': currentEvent === 'n'? "(Event Ended)": "(Upcoming)"

    const navigation = useNavigation();

    
    return(
        <View style={{backgroundColor: '#121212', flex: 1}}>
            <CollapsibleView noArrow={true} title={<Text style={styles.eventName}>{eventName}     {status}</Text>} initExpanded={expanded} style={[styles.collapsibleView, {borderColor: borderColor}]}>
            <Image style={styles.eventImage} source={eventImage}/>
            <Text style={styles.eventName}>Chracters:</Text>
            <View style={styles.constructView}>

                {amountOfCharacters > 0?(
                    <View>
                        <Text style={styles.eventName}>{Character1Name}</Text>
                        <Image style={styles.ConstructImage} source={Character1Image}/>
                    </View>
                ): null}

                {amountOfCharacters > 1?(

                    <View>
                        <Text style={[styles.eventName, {marginLeft: 250, marginTop: -120, position: 'absolute'}]}>{Character2Name}</Text>
                        <Image style={[styles.ConstructImage, {marginLeft: 125, marginTop: -100}]} source={Character2Image}/>
                    </View>
                ): null}
                {amountOfCharacters > 2?(

                <View style={{marginTop: -120}}>
                    <Text style={[styles.eventName, {marginLeft: 125}]}>{Character3Name}</Text>
                    <Image style={[styles.ConstructImage, {marginLeft: 0}]} source={Character3Image}/>
                </View>
                ): null}
            </View>
            </CollapsibleView>
        </View>

    )
}

export default EventList;