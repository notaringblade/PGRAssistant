import React, {useState} from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {Rating} from 'react-native-elements'

const memoryScreen = ({route}) => {

    const {icon, memoryName, Type, rarity, star, Artwork, SetBonus, recommended, Story, Stats} = route.params;
    const borderColor = rarity === '6'?  '#C9481E': '#CC7218'
    // const [show, setShow] = useState(false)

    const setShow = SetBonus.numberOfSets === '3'? true: false
    

    return(

        

        <View style={styles.container}>
            <View style={[styles.infoBorder, {borderColor: borderColor}]}>
                <Image style={styles.memoryIcon} source={icon}/>
                <Text style={[styles.memoryName, {fontSize: 14, fontStyle: 'italic', marginTop: 5}]}>{Type}</Text>
                <Text style={styles.memoryName}>{memoryName}</Text>
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
                        style = {{marginLeft : -275, marginTop: -5}}
                     />
                <Text style={{color: 'white', paddingBottom: 10, paddingLeft: 8}}> Created For: {recommended}</Text>
            </View>
            <View style={[styles.stats, {borderColor: borderColor}]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: borderColor, borderRadius: 3, marginTop: -1}}>
                    <Text style={styles.statText}>HP</Text>
                    <Text style={styles.statText}>Crit</Text>
                    <Text style={styles.statText}>ATK</Text>
                    <Text style={styles.statText}>DEF</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 6}}>
                    <Text style={styles.statText}>{Stats.HP}</Text>
                    <Text style={[styles.statText, {marginLeft: -10}]}>{Stats.Crit}</Text>
                    <Text style={styles.statText}>{Stats.ATK}</Text>
                    <Text style={styles.statText}>{Stats.DEF}</Text>
                </View>
            </View>
            <View style={[styles.setBonuses, {borderColor: borderColor}]}>
                <ScrollView >
            <CollapsibleView title={<Text style={styles.titleText}>2-Piece Set Effect</Text>} style={styles.collapsedView} initExpanded={true} noArrow={true} >
                    <Text style={[styles.titleText, {fontSize: 14, paddingLeft: 5, paddingTop: 5}]}>
                        {SetBonus.twoPiece}
                    </Text>
            </CollapsibleView>

            <CollapsibleView title={<Text style={styles.titleText}>4-Piece Set Effect</Text>} style={styles.collapsedView} initExpanded={true} noArrow={true} >
                    <Text style={[styles.titleText, {fontSize: 14, paddingLeft: 5, paddingTop: 5}]}>
                        {SetBonus.fourPiece}
                    </Text>
            </CollapsibleView>
        
            {setShow? (

            <CollapsibleView title={<Text style={styles.titleText}>6-Piece Set Effect</Text>} style={styles.collapsedView} initExpanded={true} noArrow={true} >
                    <Text style={[styles.titleText, {fontSize: 14, paddingLeft: 5, paddingTop: 5}]}>
                        {SetBonus.sixPiece}
                    </Text>
            </CollapsibleView>
            ): null}

            <CollapsibleView title={<Text style={styles.titleText}>Artwork</Text>} style={styles.collapsedView} initExpanded={false} noArrow={true} >
                   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={{color: 'white', fontSize: 15, paddingTop: 10}}>1 / 4</Text>
                        <Text style={{color: 'white', fontSize: 15, paddingTop: 10}}>2 / 5</Text>
                        <Text style={{color: 'white', fontSize: 15, paddingTop: 10}}>3 / 6</Text>
                   </View>
                   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Image source={icon} style={styles.artwork}/>
                        <Image source={Artwork.Grid2} style={styles.artwork}/>
                        <Image source={Artwork.Grid3} style={styles.artwork}/>
                   </View>
            </CollapsibleView>
            
            <CollapsibleView title={<Text style={styles.titleText}>Story</Text>} style={styles.collapsedView} initExpanded={true} noArrow={true} >
                <CollapsibleView title={<Text style={styles.titleText}>I</Text>} style={styles.collapsedView} initExpanded={false} noArrow={true} >
                        <Text style={[styles.titleText, {fontSize: 14, paddingTop: 5}]}>
                        {Story.I}
                        </Text>
                </CollapsibleView>
                <CollapsibleView title={<Text style={styles.titleText}>II</Text>} style={styles.collapsedView} initExpanded={false} noArrow={true} >
                        <Text style={[styles.titleText, {fontSize: 14, paddingTop: 5}]}>
                        {Story.II}
                        </Text>
                </CollapsibleView>
            </CollapsibleView>
                </ScrollView>
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
        borderWidth: 3,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        justifyContent: 'space-between'
    },  
    memoryIcon:{
        height: '100%',
        width: '100%',
        position: 'absolute',
        resizeMode: 'contain',
        marginLeft: '50%',
    },
    memoryName:{
        fontSize: 18,
        color: 'white',
        paddingLeft: 10
    },
    rarity:{
        color: 'white',
        fontSize: 18
    },  
    star:{
        height: 20,
        width: 20,
        marginTop: 2,
        marginLeft: 5
    },
    stats:{
        marginTop: 5,
        borderWidth: 3,
        borderColor: 'white',
        height: 55,
        borderRadius: 10
    },
    statText:{
        color: 'white'
    },
    setBonuses:{
        marginTop: 5,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        flex: 1
        
    },
    titleText:{
        color: '#F2F2F2',
        fontSize: 20, 
        width: '100%',
        paddingLeft: 5
    },
    collapsedView:{
        borderRadius: 20,
        borderWidth: 3,
        marginTop: 20
    },
    artwork:{
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
})
