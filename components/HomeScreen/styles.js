import { StyleSheet, Dimensions } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    construct:{  
        height: 150,
        backgroundColor: '#121212',
        borderWidth: 3,
        borderRadius: 20
      },
      
      mainImage:{
        width:100,
        height: 150,
        position: 'absolute',
        resizeMode: 'contain',
        borderRadius: 150

      },
      info:{
        width:'100%',
        marginLeft: 110,
        marginTop: 40,
      },
      characterName:{
        fontSize: 20,
        color:'white',
        fontWeight: '300'
      },
      characterRank:{
        fontSize: 15,
        color: 'white'
      },
      
});

export default styles;
