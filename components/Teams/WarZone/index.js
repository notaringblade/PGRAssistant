import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import warZoneList from './warZoneList'
import { useNavigation } from '@react-navigation/native'

const WarZoneScreen = (props) => {
  const {ZoneName, Teams, ZoneImage} = props.warZone
  const navigation = useNavigation()
  const showTeams = () =>{
    navigation.navigate('WarZoneTeams', props.warZone)
  }
  const borderColor = ZoneName === 'Physical'? 'white': ZoneName === 'Fire' ? '#DA3330': ZoneName === 'Lightning'? "#FDD023": ZoneName === 'Ice'? '#99FFFF': '#00FF00' 

  return (
    <View style={styles.View}>
      <TouchableWithoutFeedback onPress={showTeams}>
        <View  style={[styles.zoneView, {borderColor: borderColor}]}> 
          <Text style={styles.text}>{ZoneName}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default WarZoneScreen

const styles = StyleSheet.create({
  View:{
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  text:{
    color: 'white',
    alignSelf: 'center'
  },
  zoneView:{
    height: 200,
    width: 250,
    borderWidth: 4,
    borderRadius: 20
  }
})