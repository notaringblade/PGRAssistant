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
        alert('Coming Soon')
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
                                <Text style={[styles.text, {fontSize: 16}]}>{newestCharacter.characterName}</Text>
                                <Text style={[styles.text, {fontSize: 16}]}>{newestCharacter.characterModel}</Text>
                                <Text style={[styles.text, {fontSize: 16}]}>{newestCharacter.characterRank}</Text>
                            </View>
                    </View>
                </TouchableWithoutFeedback>
        
            <View style={{width: '100%', marginTop: 20,flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly'}}>
                <TouchableOpacity onPress={Constructs}>
                        <Text style={styles.text}>
                                Constructs
                        </Text>
                    <View style={styles.Teams}>
                        <Image style={styles.image} source={require('../../assets/Images/Chibi/Constructs.jpg')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Weapons}>
                        <Text style={styles.text}>
                                Weapons
                        </Text>
                    <View style={styles.Teams}>
                        <Image style={styles.image} source={require('../../assets/Images/Chibi/Weapons.jpg')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Memories}>
                        <Text style={styles.text}>
                                Memories
                        </Text>
                    <View style={styles.Teams}>
                        <Image style={styles.image} source={require('../../assets/Images/Chibi/Memories.jpg')}/>
                    </View>
                </TouchableOpacity>
            </View>
        <View style={{width: '100%', marginTop: 20,flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={warZone}>
                    <Text  style={styles.text}>
                        War Zone Teams
                    </Text>
                <View  style={styles.Teams}> 
                    <Image style={styles.image} source={require('../../assets/Images/Chibi/Warzone.jpg')}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Events}>
                        <Text style={styles.text}>
                                Events
                        </Text>
                    <View style={styles.Teams}>
                        <Image style={styles.image} source={require('../../assets/Images/Chibi/Events.jpg')}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={painCAge}>
                    <Text style={styles.text}>
                            Pain Cage Teams
                    </Text>
                <View style={styles.Teams}>
                    <Image style={styles.image} source={require('../../assets/Images/Chibi/PainCage.jpg')}/>
                </View>
            </TouchableOpacity>

        </View>
        

        </ScrollView>
      </View>
    )
};
export default StartScreen;