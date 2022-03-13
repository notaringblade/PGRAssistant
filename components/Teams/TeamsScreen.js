import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const TeamsScreen = ({navigation}) => {
    const painCage = () =>{
        alert('coming soon')
    }
    const warZone = () =>{
        navigation.navigate("WarZoneScreen")
    }
  return (
    <View style={styles.View}>
      <TouchableOpacity onPress={warZone}>
                    <Text  style={styles.text}>
                        War Zone Teams
                    </Text>
                <View  style={styles.Teams}> 
                    <Image style={styles.image} source={require('../../assets/Images/Chibi/Warzone.jpg')}/>
                </View>
            </TouchableOpacity>

      <TouchableOpacity onPress={painCage}>
                    <Text style={styles.text}>
                            Pain Cage Teams
                    </Text>
                <View style={styles.Teams}>
                    <Image style={styles.image} source={require('../../assets/Images/Chibi/PainCage.jpg')}/>
                </View>
            </TouchableOpacity>
    </View>
    
  )
}

export default TeamsScreen

const styles = StyleSheet.create({
  View:{
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text:{
    color: 'white',
    alignSelf: 'center'
  },
  Teams:{
    height: 240,
    width: 240,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#3D3D3D',
    justifyContent: 'center'
},
image:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignSelf: 'center',
}
})