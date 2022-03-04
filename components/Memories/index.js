import React from "react";
import {Text, View, Image, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {Rating} from 'react-native-elements'


const memories = (props) =>{
    const {icon, memoryName, rarity, star, Type} = props.memory;
    const navigation = useNavigation();
    
    const borderColor = rarity === '6'?  '#C9481E': '#CC7218'
    const onClick = () =>{
        navigation.navigate('MemoryScreen', props.memory)
   }

    return(
        <View style={{backgroundColor: '#121212'}}>

            <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.screenView}>
                <View style={[styles.itemView, {borderColor: borderColor}]}>
                    <ImageBackground style={styles.icon} source={icon}/>
                    <Text style={styles.memoryName}>{memoryName}</Text>
                    <Text style={styles.memoryType}>{Type}</Text>
                    <Rating
                        // showRating
                        type="custom"
                        ratingCount={Math.floor(rarity)}
                        startingValue = {rarity}
                        readonly
                        fraction ={0}
                        imageSize={15}
                        tintColor= '#121212'
                        ratingColor= {borderColor}
                        style = {{marginLeft : -50, marginTop: 8}}
                     />
                </View>
            </View>
            </TouchableWithoutFeedback>

                
        </View>
    )
}

export default memories;