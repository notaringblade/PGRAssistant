import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    screenView:{
        flex: 1,
        backgroundColor: '#121212'
    },
    eventName:{
        color: 'white'
    },
    collapsibleView:{
        alignContent: 'space-between'
    },
    eventImage:{
        // marginLeft: 42,
        height: 145,
        width: '100%'
    },
    ConstructImage:{
        resizeMode: 'contain',
        height: 100,
        marginLeft: -125
    }
    
})

export default styles;