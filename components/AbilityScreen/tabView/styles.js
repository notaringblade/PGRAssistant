import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    collapsedView:{
        // borderColor: '#F2F2F2',
        borderRadius: 20,
        borderWidth: 3,
        
    },
    titleText:{
        color: '#F2F2F2',
        fontSize: 20, 
        fontStyle: "italic",
        width: '100%',
        paddingLeft: 5
        
    },
    tabView:{
        backgroundColor: '#121212'
    },

    itemDescription:{
        color: 'white',
    },
    abilityIcon:{
        height: 90,
        // position: 'absolute',
        width: 80,
        resizeMode: 'contain',
    },
    itemView:{
        paddingLeft: 125,
        paddingTop: 30,
        position: 'absolute',
    }
    
})

export default styles;