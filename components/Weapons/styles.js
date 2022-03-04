import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: '#121212',

    },
    list:{
        // marginTop: 30,
        width: '100%',
        height: '100%',
        
    },
    backgroundStyles:{
        backgroundColor: '#121212',
    },
    searchBarBackgroundStyles:{
        width: '70%',
        justifyContent: 'center',
        backgroundColor: '#121212',
        borderRadius: 20,
    },

    itemView:{
        height: 445,
        backgroundColor: '#121212',
        borderWidth: 3.5,
        borderRadius: 20,
        width: '100%'
    },
    itemBasicDesc:{
        flexDirection: 'column',
        marginLeft: 140,
        marginTop: -80,
        width: '75%'
    },
    icon:{
        width:125,
        height: 135,
        // position: 'absolute',
        resizeMode: 'contain',
    },
    itemText:{
        color: 'white',
        fontSize: 16
    },
    ItemSeparator:{
        height: 5, 
        width: "100%", 
        // backgroundColor: "#3D3D3D"
    },
    stats:{
        marginTop: 5,
        borderColor: 'white',
        height: 55,
    },
    statText:{
        color: 'white'
    },
})

export default styles;