import React from "react";
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from "./styles";

const Weapons = () =>{
    return(
        <View style={styles.screenView}>
            
            <Text style={styles.Text}>Weapons Screen</Text>

            <View>
                <Text>
                    Katana
                </Text>
            </View>
        </View>
    )
}

export default Weapons;