import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native'
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
        alert('coming Soon')
    }
    return (
      <View style={styles.View}>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 20,borderBottomLeftRadius: 20, borderBottomRightRadius: 20
    }}>Latest Character</Text>    
                <TouchableWithoutFeedback onPress={onClick}>
                    <View style={styles.newCharacter}>
                        <Image source={require('../../assets/Images/Arctic/Construct_Arctic.png')} style={styles.newCharacterImage}/>
                            <View style={{alignItems: 'center', backgroundColor: '#C04F15', width: '100%'}}>
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

        <View style={{marginTop: 20,flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={warZone}>
                <View  style={styles.Teams}> 
                    <Text  style={styles.text}>
                        War Zone Teams
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={warZone}>
                <View style={styles.Teams}>
                    <Text style={styles.text}>
                            Pain Cage Teams
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
      </View>
    )
};
export default StartScreen;