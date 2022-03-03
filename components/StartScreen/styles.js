import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    View:{
        flex: 1,
        backgroundColor: '#121212'
    },
    newCharacter:{
        alignSelf: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: '#C04F15',
        borderWidth: 5,
        width: 340,
        height: 405
    },
    newCharacterImage:{
        width: 315,
        height: 315,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text:{
        color: 'white',
        fontSize: 20,
    }
})
export default styles;