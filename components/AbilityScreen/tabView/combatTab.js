import React from "react";
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import { useContext } from "react";
import { AbilityContext } from "../context";
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import styles from "./styles";

const CombatTab = ({route}) =>{

    const Ability = useContext(AbilityContext)
    const colorOfBorder = Ability.construct_Rank === 'S' ? '#CF3B00': Ability.construct_Rank === 'A' ? '#821890': '#0147A4' ; 
    

    return(
        <ScrollView style={styles.tabView}>
            {/* Orbs */}
        <CollapsibleView title={<Text style={styles.titleText}>Orbs</Text>} style={styles.collapsedView} initExpanded={true} noArrow={true} >
            <CollapsibleView title={<Text style={styles.titleText}>Red Orb</Text>} style={styles.collapsedView}  noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.redPingIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.redPing}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>Yellow Orb</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.yellowPingIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.yellowPing}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>Blue Orb</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.bluePingIcon} style={styles.abilityIcon}></Image>
               <Text style={styles.itemDescription}>{Ability.combat.bluePing}</Text>
            </CollapsibleView>
        </CollapsibleView>

            {/* Skills */}
        <CollapsibleView title={<Text style={styles.titleText}>Skills</Text>} style={styles.collapsedView} initExpanded={false} noArrow={true}  >
            <CollapsibleView title={<Text style={styles.titleText}>Basic Atack</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.basicAttackIcon} style={styles.abilityIcon}></Image>
                
                <Text style={styles.itemDescription}>{Ability.combat.basicAttack}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>Signature</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.signatureIcon} style={styles.abilityIcon}></Image>
                
                <Text style={styles.itemDescription}>{Ability.combat.signature}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>QTE</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.qteIcon} style={styles.abilityIcon}></Image>
                
                <Text style={styles.itemDescription}>{Ability.combat.qte}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>Class</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.classIcon} style={styles.abilityIcon}></Image>
                
                <Text style={styles.itemDescription}>{Ability.combat.class}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>Awakening</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>
                <Image source={Ability.combat.awakeningIcon} style={styles.abilityIcon}></Image>
                
                <Text style={styles.itemDescription}>{Ability.combat.awakening}</Text>
            </CollapsibleView>
        </CollapsibleView>

            {/* Passives */}
        <CollapsibleView title={<Text style={styles.titleText}>Passives</Text>} style={styles.collapsedView} initExpanded={false} noArrow={true}  >
            <CollapsibleView title={<Text style={styles.titleText}>Core</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>

            <Image source={Ability.combat.coreIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.core}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>Leader</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>

            <Image source={Ability.combat.leaderIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.leader}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>SS Rank</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>

            <Image source={Ability.combat.ssRankIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.ssRank}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>SSS Rank</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>

            <Image source={Ability.combat.sssRankIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.sssRank}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>SSS+ Rank</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>

            <Image source={Ability.combat.sssPlusRankIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.sssPlusRank}</Text>
            </CollapsibleView>
            <CollapsibleView title={<Text style={styles.titleText}>Hidden Skill</Text>} style={styles.collapsedView} noArrow={false} arrowStyling={{color : '#F2F2F2'}}>

            <Image source={Ability.combat.hiddenSkillIcon} style={styles.abilityIcon}></Image>
                <Text style={styles.itemDescription}>{Ability.combat.hiddenSkill}</Text>
            </CollapsibleView>
        </CollapsibleView>
        
        </ScrollView>
        
    )
}

export default CombatTab;
