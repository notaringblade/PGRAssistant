import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    collapsedView:{
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 3
    },
    titleText:{
        color: 'white',
        fontSize: 20, 
        fontStyle: "italic",
        width: '100%',
        
    },
    tabView:{
        backgroundColor: '#121212'
    },

    itemDescription:{
        color: 'white',
        marginLeft: 70,
        marginTop: -50
    },
    abilityIcon:{
        marginLeft: -15,
        height: 60,
        width: 100,
        resizeMode: 'contain',
    }
})

export default styles;