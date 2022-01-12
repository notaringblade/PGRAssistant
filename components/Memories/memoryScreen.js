import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const memoryScreen = ({route}) => {

    const {icon, memoryName, stars, star} = route.params;
    const borderColor = stars === '6'?  '#971948': '#E5BF8C'

    return(
        <View style={styles.container}>
            <View style={[styles.infoBorder, {borderColor: borderColor}]}>
                <Image style={styles.memoryIcon} source={icon}/>
                <Text style={styles.memoryName}>{memoryName}</Text>
                <View style={{flexDirection: 'row', position: 'absolute', paddingTop: 70}}>
                    <Text style={styles.rarity}>{stars}</Text>
                    <Image style={[styles.star, {tintColor: borderColor} ]} source={star}/>
                </View>
            </View>
            <View style={styles.stats}>

            </View>
            <View style={styles.setBonuses}>

            </View>
        </View>
    )
} 

export default memoryScreen;

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#121212'
    },
    infoBorder:{
        height: 125,
        borderWidth: 2,
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        justifyContent: 'space-between'
    },  
    memoryIcon:{
        height: '100%',
        width: '100%',
        position: 'absolute',
        resizeMode: 'contain',
        marginLeft: 140,
    },
    memoryName:{
        fontSize: 18,
        color: 'white',
        paddingTop: 30
    },
    rarity:{
        color: 'white',
        fontSize: 18
    },  
    star:{
        height: 25,
        width: 25,
        
    }
})
