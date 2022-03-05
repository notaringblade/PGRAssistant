import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TeamsScreen = ({navigation}) => {
    const painCage = () =>{
        navigation.navigate("PainCageScreen")
    }
    const warzone = () =>{
        navigation.navigate("WarZoneScreen")
    }
  return (
    <View style={styles.View}>
      <Text style={styles.text} onPress={warzone}>War Zone</Text>
      <Text style={styles.text} onPress={painCage}>Pain Cage</Text>
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
    color: 'white'
  }
})