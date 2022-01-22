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
        height: '100%',
        backgroundColor: '#121212',
        borderWidth: 3.5,
        borderRadius: 20,
        width: '100%'
    },
    itemBasicDesc:{
        position: 'absolute',
        marginTop: 30
    },
    icon:{
        width:125,
        height: 135,
        // position: 'absolute',
        resizeMode: 'contain',
        borderRadius: 150,
    },
    itemText:{
        paddingLeft: 120,
        color: 'white',
        fontSize: 14
    },
    ItemSeparator:{
        height: 5, 
        width: "100%", 
        // backgroundColor: "#3D3D3D"
    },
})

export default styles;