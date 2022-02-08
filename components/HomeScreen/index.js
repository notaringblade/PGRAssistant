import React from "react";
import {View, TouchableWithoutFeedback, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {
    const {construct_Name, construct_Model, construct_Rank, construct_Image, memories} = props.construct;
    const navigation = useNavigation();
    const newColorOfBorder = construct_Rank === 'S' ?  '#C04F15': construct_Rank === 'A' ? '#AC54B9':  '#0794BE';
    const onClick = () =>{
         navigation.navigate('Ability', props.construct)
    }
       

    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={[styles.construct, {borderColor: newColorOfBorder}]}>
            <View style={styles.itemView}>
            <View style={styles.info}>
            <Text style={styles.characterName}>{construct_Name}</Text>
            <Text style={styles.characterName}>{construct_Model}</Text>
            <Text style={styles.characterRank}>{construct_Rank}</Text>
            </View>
            <Image style={styles.mainImage} source={construct_Image} />
            </View>
        </View>
        </TouchableWithoutFeedback>
        
    );
};

export default HomeScreen;