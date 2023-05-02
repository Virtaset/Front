import { View, StyleSheet } from 'react-native';
import React from 'react';
import PriceNow from '../components/PriceNow';
import LatestPrices from '../components/LatestPrices';
import styles from '../styles/styleSheet.js';
import Averages from '../components/Averages';

export default function HomePage() {
    return (
        <View style={styles.homeContainer}>
            <PriceNow />
            <Averages />
            <LatestPrices />
        </View>
    )
}