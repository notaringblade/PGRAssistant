import React from "react";
import {Image, Text, View } from 'react-native';
import { abs } from "react-native-reanimated";
import styles from "./styles";

const Weapons = (props) =>{
    const {weaponName, weaponImage, weaponType, rarity, signatureConstruct, constructName, Ability} = props.weapons

    const borderColor = rarity === '6' ? '#C9481E': '#CC7218';

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
                    <Text style={[styles.itemText, {fontSize: 12, paddingTop: 6}]}>
                        {rarity}
                    </Text>
                </View>
                <Text style={{ color: 'white', backgroundColor: borderColor, borderRadius: 10, textAlign: 'center', }}>Signature Construct</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

                    <Image source={signatureConstruct} style={{height: 115, width: 130, resizeMode: 'contain'}} />
                    <Text style={{color: 'white', paddingTop: 55, fontSize: 20}}>{constructName}</Text>
                </View>

                <Text style={{ color: 'white', backgroundColor: borderColor, borderRadius: 10, textAlign: 'center', }}>Ability</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'white', fontSize: 14, margin: 2}}>{Ability}</Text>
                </View>
            </View>
        </View>
    )
}

export default Weapons;