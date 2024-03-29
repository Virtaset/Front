import { useState, React, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/styleSheet.js'
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient'

//Functional component to get the current price of electricity
export default function PriceNow() {
  const [price, setPrice] = useState('')

  //Get the current date and hour and format them suitable for the API
  const date = moment().format('YYYY-MM-DD')
  const hour = moment().format('HH')

  const fetchPrice = () => {
    fetch(`https://api.porssisahko.net/v1/price.json?date=${date}&hour=${hour}`)
      .then(response => response.json())
      .then(responseData => {
        setPrice(responseData.price)
      })
      .catch(err => console.error(err))
  }

  //Fetch the price initially and then fetch it every 10 seconds
  useEffect(() => {
    fetchPrice()
    const interval = setInterval(() => {
      fetchPrice()
      //console.log(price)
    }, 10000)
    return () => clearInterval(interval)
  }, []);


  //Return the current price and time
  return (
    <View>
      <LinearGradient colors={['#FACF39', '#FFE172', '#FFEEA7']} style={[styles.priceNowContainer, styles.elevation]}>
      <FontAwesome name='bolt' size={40} />
      <Text style={styles.electricityText}>Sähkön hinta nyt:{"\n"} {price} snt/kWh</Text>
      </LinearGradient>
    </View>

  );
}