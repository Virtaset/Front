import { View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import PriceNow from '../components/PriceNow';

export default function HomePage() {
    return (
        <View>
            <Header />
            <PriceNow />
        </View>
    )
}


