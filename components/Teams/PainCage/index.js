import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PainCageScreen = (props) => {
  return (
    <View style={styles.View}>
      <Text style={styles.text}>PainCageScreen</Text>
    </View>
  )
}

export default PainCageScreen

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