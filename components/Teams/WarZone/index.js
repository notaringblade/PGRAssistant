import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const WarZoneScreen = () => {
  return (
    <View style={styles.View}>
      <Text style={styles.text}>WarZoneScreen</Text>
    </View>
  )
}

export default WarZoneScreen

const styles = StyleSheet.create({
  View:{
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: 'white'
  }
})