import React from "react";
import {Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {Rating} from 'react-native-elements'


const Weapons = (props) =>{
    const {weaponName, weaponImage, weaponType, rarity, signatureConstruct, constructName, Ability, stats, id} = props.weapons

    const borderColor = rarity === '6' ? '#C9481E': '#CC7218';

    const navigation = useNavigation()
    const onClick = () =>{
        navigation.navigate('Constructs', {characterIndex: id})
    }
    

    return(
        <View style={ {backgroundColor: '#121212', flex: 1}}>
            <View style={[styles.itemView, {borderColor: borderColor}]}>
                    <Image source={weaponImage} style={styles.icon}/>
                <View style={styles.itemBasicDesc}>
                    <Text style={[styles.itemText, { fontStyle: "italic", fontSize: 12}]}>
                        {weaponType}
                    </Text>
                    <Text style={[styles.itemText, {paddingTop: 6}]}>
                        {weaponName}
                    </Text>
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
                        style = {{marginLeft: -200,marginTop: 8}}
                     />
                </View>
                    <View style={[styles.stats, {borderColor: borderColor}]}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: borderColor}}>
                        <Text style={styles.statText}>Max ATK</Text>
                        <Text style={styles.statText}>Max CRIT</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 8}}>
                        <Text style={styles.statText}>{stats.atk}</Text>
                        <Text style={[styles.statText, {marginLeft: -10}]}>{stats.crit}</Text>
                    </View>
            </View>
                <Text style={{ color: 'white', backgroundColor: borderColor,  textAlign: 'center', }}>Signature Construct</Text>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-evenly'}} onPress={onClick}>
                        <Image source={signatureConstruct} style={{height: 115, width: 130, resizeMode: 'contain'}} />
                        <Text style={{color: 'white', paddingTop: 55, fontSize: 20}}>{constructName}</Text>
                    </TouchableOpacity>

                <Text style={{ color: 'white', backgroundColor: borderColor,  textAlign: 'center', }}>Ability</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'white', fontSize: 14, margin: 2}}>{Ability}</Text>
                </View>
            </View>
        </View>
    )
}

export default Weapons;