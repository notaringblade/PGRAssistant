import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import warZoneList from './warZoneList'
import WarZoneScreen from './index'
import CompleteFlatList from 'react-native-complete-flatlist'

const warZoneListDisplay = () => {
    const ItemSeparator = () => {
        return <View style={styles.ItemSeparator} />;
      };
  return (
      <View style={{flex: 1}}>

          <CompleteFlatList 
              data={warZoneList}
              slide= {'left'}
              backgroundStyles= {{backgroundColor: '#121212'}}
              renderItem={({ item }) => <WarZoneScreen warZone={item} />}
              renderSeparator = {ItemSeparator}
          />
      </View>
  )
}

export default warZoneListDisplay

const styles = StyleSheet.create({
    ItemSeparator:{
        backgroundColor: '#121212',
        height: 5
    }
})