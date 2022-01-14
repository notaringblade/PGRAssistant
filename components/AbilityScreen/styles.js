import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',

    },

    constructInfo:{
    },

    constructMiniDesc:{
        height: '20%',
        borderWidth: 3,
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center'
    },
    descBackground:{
        height: '100%',
        width: '100%',
        position: 'absolute',
        resizeMode: 'contain',
    },

    constructIcon:{
        height: '90%',
        width: '90%',
        position: 'absolute',
        resizeMode: 'contain',
        marginLeft: '50%',
        marginTop: 10,
    },
    
    constructName:{
        fontSize: 18,
        color: '#D9D9D9'
    },
    
    constructModel:{
        fontSize: 18,
        color: '#D9D9D9'

    },
    
    constructRank:{
        fontSize: 18,
        color : '#D9D9D9'

    },

    constructElement:{
        fontSize: 18,
        color: '#D9D9D9'

    },
    constructType:{
        fontSize: 18,
        color: '#D9D9D9'

    },
    stats:{
        marginTop: 5,
        borderWidth: 3,
        borderColor: 'white',
        height: 55,
        borderRadius: 10
    },
    statText:{
        color: 'white'
    },
    
    tabsView:{
        borderWidth: 3,
        borderRadius: 20,
        flex: 1,
        marginTop: 2,
    },

});

export default styles;