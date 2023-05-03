import { React } from 'react';
import { View, Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/styleSheet.js'
import { LinearGradient } from 'expo-linear-gradient'
import TomorrowsAvgPrice from './TomorrowsAvgPrice.js';
import TomorrowsHighestPrice from './TomorrowsHighestPrice.js';
import TomorrowsLowestPrice from './TomorrowsLowestPrice.js';


export default function TomorrowsAverages() {



  return (
    <View style={styles.averageBoxes}>
      <View>
        <LinearGradient colors={['#32a852', '#71bf86', '#92d4a2']} style={styles.averageBox} >
        <Feather name='arrow-up' size={30}/>
        <Text>Korkein hinta</Text>
        <TomorrowsHighestPrice/>

        </LinearGradient>
    </View>
    <View>
        <LinearGradient colors={['#32a852', '#71bf86', '#92d4a2']} style={styles.averageBox}>
        <Feather name='arrow-down' size={30}/>
        <Text>Alin hinta</Text>
        <TomorrowsLowestPrice/>
        </LinearGradient>
    </View>
    <View>
        <LinearGradient colors={['#32a852', '#71bf86', '#92d4a2']} style={styles.averageBox}>
        <MaterialCommunityIcons name='chart-timeline-variant-shimmer' size={30}/>
        <Text>Keskiarvo hinta</Text>
        <TomorrowsAvgPrice/>
        </LinearGradient>
    </View>
    </View>

  );
}