import CollapsibleView from "@eliav2/react-native-collapsible-view";
import React from "react";
import {View, Text, ScrollView} from 'react-native';
import styles from "./styles";
import { AbilityContext } from "../context";
import { useContext } from "react";



const MemoryTab = () =>{

    const Ability = useContext(AbilityContext)


    return(

        <ScrollView style={styles.tabView}>

                <CollapsibleView title={<Text style={styles.titleText}>Weapon 1</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#3D3D3D'}}>
                    <Text style={styles.itemDescription}>{Ability.weapons.weapon1}</Text>
                </CollapsibleView>
                <CollapsibleView title={<Text style={styles.titleText}>Weapon 2</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#3D3D3D'}}>
                    <Text style={styles.itemDescription}>{Ability.weapons.weapon2}</Text>
                </CollapsibleView>

        </ScrollView>

    );
};

export default MemoryTab;