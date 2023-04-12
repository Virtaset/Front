import { View, StyleSheet } from 'react-native';
import React from 'react';
import PriceNow from '../components/PriceNow';
import LatestPrices from '../components/LatestPrices';
import styles from '../styles/styleSheet.js';

export default function HomePage() {
    return (
        <View style={styles.homeContainer}>
            <PriceNow />
            <LatestPrices />
        </View>
    )
}