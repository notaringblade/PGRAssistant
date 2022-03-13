import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    View:{
      flex: 1,
      backgroundColor: '#121212',
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
    },
    TierStyles:{
        borderColor: '#C04F15',
        marginTop: 20,
        height: 30,
        width: '100%',
        borderWidth: 5,
        borderRadius: 20,
        alignSelf: 'center',
    },
    constructImage:{
        height: 120,
        width: 110,
        borderWidth: 2,
        borderColor: '#FF6666',
        borderRadius: 30,
        resizeMode: 'cover'
    },
    TeamView:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'

    }

  })

export default styles;