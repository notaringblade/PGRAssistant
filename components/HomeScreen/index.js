import React from "react";
import {View, TouchableWithoutFeedback, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = (props) => {
    const {construct_Name, construct_Model, construct_Rank, construct_Image, memories} = props.construct;
    const navigation = useNavigation();
    const newColorOfBorder = construct_Rank === 'S' ? ['#452621', '#C04F15', '#452621']: construct_Rank === 'A' ? ['#4C1154', '#AC54B9', '#4C1154']: ['#011D33', '#37D8F8','#011D33' ];
    const onClick = () =>{
         navigation.navigate('Ability', props.construct)
    }
       

    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <LinearGradient start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={newColorOfBorder}
                  style={styles.border}>
        <View style={styles.construct}>
            <View style={styles.itemView}>
            <View style={styles.info}>
            <Text style={styles.characterName}>{construct_Name}</Text>
            <Text style={styles.characterName}>{construct_Model}</Text>
            <Text style={styles.characterRank}>{construct_Rank}</Text>
            </View>
            <Image style={styles.mainImage} source={construct_Image} />
            </View>
        </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
        
    );
};

export default HomeScreen;