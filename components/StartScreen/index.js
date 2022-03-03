import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from '../StartScreen/styles';

const StartScreen = (props) => {
    const newestCharacter = {
        characterName: 'Rosetta',
        characterModel: 'Rigor',
        characterRank: 'S',
    }

    const navigation = useNavigation()

    const onClick =() =>{
        navigation.navigate('Constructs', {characterIndex: newestCharacter.characterIndex})
    }

    return (
      <View style={styles.View}>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20,borderBottomLeftRadius: 20, borderBottomRightRadius: 20
}}>Newest Character</Text>    
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
      </View>
    )
};
export default StartScreen;