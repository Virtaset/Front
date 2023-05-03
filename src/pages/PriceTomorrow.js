import {React, useState, useEffect} from 'react';
import { Dimensions, View, Text } from "react-native";
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from "victory-native";


import { LinearGradient } from 'react-native-svg';
import styles from '../styles/styleSheet.js';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import TomorrowsAverages from '../components/TomorrowsAverage.js';

export default function PriceTomorrow() {
  const [latestPrices, setLatestPrices] = useState([]);
  const [tomorrowsPrices, setTomorrowsPrices] = useState([]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    fetch('https://api.porssisahko.net/v1/latest-prices.json')
      .then(response => response.json())
      .then(responseData => {
        setLatestPrices(responseData.prices);
      })
      .catch(err => console.error(err))
  }, []);

  useEffect(() => {
    const newStartDate = new Date(tomorrow.setUTCHours(0, 0, 0, 0));
    const newEndDate = new Date(tomorrow.setUTCHours(24, 0, 0, 0));

    const filteredPrices = latestPrices.filter(price =>
      new Date(price.startDate) >= newStartDate && new Date(price.endDate) <= newEndDate);

    const arrangedPrices = filteredPrices.reverse();

    setTomorrowsPrices(arrangedPrices);
  }, [latestPrices]);

  const getColor = (price) => {
    if (price > 12) {
      return "#db2727";
    } else if (price >= 7 && price <= 12) {
      return "#FACF39";
    } else {
      return "#32a852";
    }
  };



  if (tomorrowsPrices.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hinnat tulevat klo 14:00</Text>
      </View>
    );
  }

  return (

    <View>

    <TomorrowsAverages/>

    <VictoryChart
      theme={VictoryTheme.material}
      width={Dimensions.get('window').width}
      height={275}
    >
      <VictoryBar
        data={tomorrowsPrices}
        y='price'
        x='startDate'
        style={{ data: { fill: ({ datum }) => getColor(datum.price) } }}
      />
    </VictoryChart>
    </View>
  );
};
