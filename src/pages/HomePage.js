import { View, StyleSheet } from 'react-native';
import React from 'react';
import PriceNow from '../components/PriceNow';
import LatestPrices from '../components/LatestPrices';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <PriceNow />
            <LatestPrices />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center', 
    }
})

