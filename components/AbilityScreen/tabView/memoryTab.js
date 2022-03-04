import CollapsibleView from "@eliav2/react-native-collapsible-view";
import React from "react";
import {StyleSheet, Text, ScrollView, Image, View, TouchableWithoutFeedback} from 'react-native';
import { AbilityContext } from "../context";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";




const MemoryTab = (props) =>{

    const navigation = useNavigation();


    const Ability = useContext(AbilityContext)
    const onClick = () =>{
        navigation.navigate('Memories', {memoryIndex: Ability.memories.set1.memoryID})
    }
    const onClick2 = () =>{
        navigation.navigate('Memories', {memoryIndex: Ability.memories.set2.memoryID})
    }
    const showMemory2 = Ability.memories.has2Sets === 'y'? true: false;

    return(

        <ScrollView style={styles.tabView}>

                <CollapsibleView title={<Text style={styles.titleText}>{Ability.memories.set1.set1Name}</Text>} style={styles.collapsedView} initExpanded={true} arrowStyling={{color : '#F2F2F2'}}>
                    <View style={styles.row1}>
                        <TouchableWithoutFeedback onPress={onClick}>
                    <Image style={styles.memory} source={Ability.memories.set1.image1}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick}>
                    <Image style={styles.memory} source={Ability.memories.set1.image2}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick}>
                    <Image style={styles.memory} source={Ability.memories.set1.image3}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.row1}>
                    <Text style={styles.memoryName}>{Ability.memories.set1.memory1}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set1.memory2}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set1.memory3}</Text>
                    </View>

                    <View style={styles.row2}>
                    <TouchableWithoutFeedback onPress={onClick}>
                    <Image style={styles.memory} source={Ability.memories.set1.image4}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick}>
                    <Image style={styles.memory} source={Ability.memories.set1.image5}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick}>
                    <Image style={styles.memory} source={Ability.memories.set1.image6}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.row1}>
                    <Text style={styles.memoryName}>{Ability.memories.set1.memory4}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set1.memory5}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set1.memory6}</Text>
                    </View>
                </CollapsibleView>
            
            {showMemory2? (

                <CollapsibleView title={<Text style={styles.titleText}>{Ability.memories.set2.set2Name}</Text>} style={styles.collapsedView}  arrowStyling={{color : '#F2F2F2'}}>
                    <View style={styles.row2}>
                        <TouchableWithoutFeedback onPress={onClick2}>
                    <Image style={styles.memory} source={Ability.memories.set2.image1}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick2}>
                    <Image style={styles.memory} source={Ability.memories.set2.image2}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick2}>
                    <Image style={styles.memory} source={Ability.memories.set2.image3}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.row2}>
                    <Text style={styles.memoryName}>{Ability.memories.set2.memory1}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set2.memory2}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set2.memory3}</Text>
                    </View>

                    <View style={styles.row2}>
                    <TouchableWithoutFeedback onPress={onClick2}>
                    <Image style={styles.memory} source={Ability.memories.set2.image4}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick2}>
                    <Image style={styles.memory} source={Ability.memories.set2.image5}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={onClick2}>
                    <Image style={styles.memory} source={Ability.memories.set2.image6}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.row2}>
                    <Text style={styles.memoryName}>{Ability.memories.set2.memory4}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set2.memory5}</Text>
                    <Text style={styles.memoryName}>{Ability.memories.set2.memory6}</Text>
                    </View>
                </CollapsibleView>
            ): null}
                

        </ScrollView>

    );
};

export default MemoryTab;
const styles = StyleSheet.create({
    row1:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginLeft: -10
    },
    row2:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginLeft: -10
    },
    memoryName:{
        color: 'white',
    },
    memory:{
        height: 125,
        width: 125,
        resizeMode: 'contain'
    },
    collapsedView:{
        borderRadius: 20,
        borderWidth: 3
    },
    titleText:{
        color: '#F2F2F2',
        fontSize: 20, 
        fontStyle: "italic",
        width: '100%',
        paddingLeft: 5
    },
    tabView:{
        backgroundColor: '#121212'
    }
})