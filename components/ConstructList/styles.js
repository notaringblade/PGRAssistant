import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
    list:{
        // marginTop: 30,
        width: Dimensions.get('window').width,
        height: '100%',
        
    },
    backgroundStyles:{
        backgroundColor: '#121212',
        
    },
    searchBarBackgroundStyles:{
        width: '70%',
        justifyContent: 'center',
        backgroundColor: '#121212',
        borderRadius: 20

    },
    ItemSeparator:{
        height: 5, 
        width: "100%", 
        // backgroundColor: "#3D3D3D"
    },
    view:{
        flex: 1,
        backgroundColor: '#121212'
    }
    


    
    
})

export default Styles;

