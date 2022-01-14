import React from "react";
import {Text, View, Image, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const memories = (props) =>{
    const {icon, memoryName, rarity, star} = props.memory;
    const navigation = useNavigation();

    const borderColor = rarity === '6'?  '#971948': '#E5BF8C'
    const onClick = () =>{
        navigation.navigate('MemoryScreen', props.memory)
   }

    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.screenView}>
            <View style={[styles.itemView, {borderColor: borderColor}]}>
                <Image style={[styles.star, {tintColor: borderColor}]} source={star}/>
                <ImageBackground style={styles.icon} source={icon}/>
                <Text style={styles.memoryName}>{memoryName}</Text>
                <Text style={styles.rarity}>{rarity}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default memories;