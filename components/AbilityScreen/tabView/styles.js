import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    collapsedView:{
        borderColor: '#F2F2F2',
        borderRadius: 20,
        borderWidth: 3
    },
    titleText:{
        color: '#F2F2F2',
        fontSize: 20, 
        fontStyle: "italic",
        width: '100%',
        
    },
    tabView:{
        backgroundColor: '#121212'
    },

    itemDescription:{
        color: '#F2F2F2',
        marginLeft: 90,
        marginTop: -30
    },
    abilityIcon:{
        height: 60,
        // position: 'absolute',
        width: 90,
        resizeMode: 'contain',
    }
})

export default styles;