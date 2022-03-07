import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableWithoutFeedback, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../StartScreen/styles';

const StartScreen = (props) => {
    const newestCharacter = {
        characterName: 'Rosetta',
        characterModel: 'Rigor',
        characterRank: 'S',
        characterIndex: 24
    }

    const navigation = useNavigation()

    const onClick =() =>{
        navigation.navigate('Constructs', {characterIndex: 24})
    }
    const warZone =() =>{
        navigation.navigate("WarZoneScreen")
    }
    const painCAge =() =>{
        navigation.navigate("PainCageScreen")
    }
    const Constructs =() =>{
        navigation.navigate("Constructs", {characterIndex: 0})
    }
    const Weapons =() =>{
        navigation.navigate("WeaponScreen", {weaponIndex: 0})
    }
    const Memories =() =>{
        navigation.navigate("Memories", {memoryIndex: 0})
    }
    const Events =() =>{
        navigation.navigate("EventsDrawer")
    }

    return (
      <View style={styles.View}>
          <ScrollView>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 20,borderBottomLeftRadius: 20, borderBottomRightRadius: 20
    }}>Latest Character</Text>    
                <TouchableWithoutFeedback onPress={onClick}>
                    <View style={styles.newCharacter}>
                        <Image source={require('../../assets/Images/Arctic/Construct_Arctic.png')} style={styles.newCharacterImage}/>
                            <View style={{alignItems: 'center', backgroundColor: '#C04F15', width: '100%', height: 75}}>
                                <Text style={styles.text}>{newestCharacter.characterName}</Text>
                                <Text style={styles.text}>{newestCharacter.characterModel}</Text>
                                <Text style={styles.text}>{newestCharacter.characterRank}</Text>
                            </View>
                    </View>
                </TouchableWithoutFeedback>
        <CollapsibleView title={<Text style={{color:'white'}}>Update Log</Text>} style={{marginTop: 20, borderRadius: 20, borderWidth: 5, borderColor: '#3D3D3D'}} initExpanded={false}>
            <Text style={{color:"white"}}>
                Update Logs go here ok???????????????
            </Text>
        </CollapsibleView>

            <View style={{width: '100%', marginTop: 20,flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly'}}>
                <TouchableOpacity onPress={Constructs}>
                    <View style={styles.Teams}>
                        <Text style={styles.text}>
                                Constructs
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Weapons}>
                    <View style={styles.Teams}>
                        <Text style={styles.text}>
                                Weapons
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Memories}>
                    <View style={styles.Teams}>
                        <Text style={styles.text}>
                                Memories
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        <View style={{width: '100%', marginTop: 20,flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={warZone}>
                <View  style={styles.Teams}> 
                    <Text  style={styles.text}>
                        War Zone Teams
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={painCAge}>
                <View style={styles.Teams}>
                    <Text style={styles.text}>
                            Pain Cage Teams
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Events}>
                    <View style={styles.Teams}>
                        <Text style={styles.text}>
                                Events
                        </Text>
                    </View>
            </TouchableOpacity>

        </View>

        </ScrollView>
      </View>
    )
};
export default StartScreen;