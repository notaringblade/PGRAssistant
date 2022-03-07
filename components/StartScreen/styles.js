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
        width: 325,
        height: 375
    },
    newCharacterImage:{
        width: 290,
        height: 290,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    Teams:{
        height: 120,
        width: 120,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#3D3D3D',
        justifyContent: 'center'
    }
})
export default styles;