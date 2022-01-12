import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    screenView:{
        flex: 1,
        backgroundColor: '#121212'
    },
    Text:{
        color: 'white'
    },
    itemView:{
        margin: 2,
        height: 120,
        backgroundColor: '#121212',
        borderWidth: 3.5,
        borderRadius: 20,
    },
    icon:{
        width:130,
        height: 115,
        resizeMode: 'contain',
        marginLeft: -20
    },
    textView:{
        
    },
    star:{
        position: 'absolute',
        width: 20,
        height: 20,
        marginLeft: 135,
        tintColor: '#971948',
        marginTop: 70
    },
    rarity:{
        marginLeft: 120,
        color: 'white',
        marginTop: 19,
        fontSize: 20
    },
    memoryName:{
        paddingLeft: 120,
        color: 'white',
        marginTop: -95,
        fontSize: 20
    },
    view:{
        flex: 1,
        backgroundColor: '#121212'
    },
    list:{
        // marginTop: 30,
        width: Dimensions.get('window').width,
        height: '100%',
        
    },
    backgroundStyles:{
        backgroundColor: '#121212',
    },
    ItemSeparator:{
        height: 5, 
        width: "100%", 
        // backgroundColor: "#3D3D3D"
    },
    searchBarBackgroundStyles:{
        width: '70%',
        justifyContent: 'center',
        backgroundColor: '#121212',
        borderRadius: 20,
    },
})

export default styles;