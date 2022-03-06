import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const warZoneTeams = ({route, navigation}) => {
  const {ZoneName, Teams} = route.params


  
  const S1 = ()=>{
      navigation.navigate('Constructs', {characterIndex: Teams.Tier1.blueConstructID})
  }
  const S2 = ()=>{
    navigation.navigate('Constructs', {characterIndex: Teams.Tier1.redConstructID})

}
const S3 = ()=>{
    navigation.navigate('Constructs', {characterIndex: Teams.Tier1.yellowConstructID})

}

const A1 = ()=>{
    navigation.navigate('Constructs', {characterIndex: Teams.Tier2.blueConstructID})
}
const A2 = ()=>{
  navigation.navigate('Constructs', {characterIndex: Teams.Tier2.redConstructID})

}
const A3 = ()=>{
  navigation.navigate('Constructs', {characterIndex: Teams.Tier2.yellowConstructID})

}

const B1 = ()=>{
    navigation.navigate('Constructs', {characterIndex: Teams.Tier3.blueConstructID})
}
const B2 = ()=>{
  navigation.navigate('Constructs', {characterIndex: Teams.Tier3.redConstructID})

}
const B3 = ()=>{
  navigation.navigate('Constructs', {characterIndex: Teams.Tier3.yellowConstructID})

}

  return (
    <View style={styles.View}>
      <Text style={styles.text}>{ZoneName}</Text>
      <View>
          {/* Tier 1 */}
          <View style={styles.TierStyles}>
            <Text style={styles.text} >
                {Teams.Tier1.tierTitle}
            </Text>
          </View>
          <View style={styles.TeamView}>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={S1} >
                    <Image style={[styles.constructImage, {borderColor: 'blue'}]} source={Teams.Tier1.blueConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier1.blueConstructName}</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={S2}>
                    <Image style={styles.constructImage} source={Teams.Tier1.redConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier1.redConstructName}</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={S3}>
                    <Image style={[styles.constructImage, {borderColor: 'yellow'}]} source={Teams.Tier1.yellowConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier1.yellowConstructName}</Text>
              </View>
          </View>

          {/* Tier 2 */}
          <View style={styles.TierStyles}>
            <Text style={styles.text} >
                {Teams.Tier2.tierTitle}
            </Text>
          </View>
          <View style={styles.TeamView}>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={A1}>
                    <Image style={[styles.constructImage, {borderColor: 'blue'}]} source={Teams.Tier2.blueConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier2.blueConstructName}</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={A2}>
                    <Image style={styles.constructImage} source={Teams.Tier2.redConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier2.redConstructName}</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={A3}>
                    <Image style={[styles.constructImage, {borderColor: 'yellow'}]} source={Teams.Tier2.yellowConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier2.yellowConstructName}</Text>
              </View>
          </View>

          {/* Tier 2 */}
          <View style={styles.TierStyles}>
            <Text style={styles.text} >
                {Teams.Tier3.tierTitle}
            </Text>
          </View>
          <View style={styles.TeamView}>
            <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={B1}>
                    <Image style={[styles.constructImage, {borderColor: 'blue'}]} source={Teams.Tier3.blueConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier3.blueConstructName}</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={B2}>
                    <Image style={styles.constructImage} source={Teams.Tier3.redConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier3.redConstructName}</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <TouchableWithoutFeedback onPress={B3}>
                    <Image style={[styles.constructImage, {borderColor: 'yellow'}]} source={Teams.Tier3.yellowConstructImage}/>
                </TouchableWithoutFeedback>
                    <Text style={[styles.text, {width: 100}]}>{Teams.Tier3.yellowConstructName}</Text>
              </View>
          </View>
      </View>
    </View>
  )
}

export default warZoneTeams