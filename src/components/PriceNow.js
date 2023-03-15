import { useState, React, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';

//Functional component to get the current price of electricity
export default function PriceNow() {
  const [price, setPrice] = useState()

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
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name='bolt' size={40} />
      <Text style={styles.electricityText}>Sähkön hinta klo {hour} :{"\n"} {price} snt/kWh</Text>
    </View>

  );
}

//Preliminary styles for the app
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 120,
    width: 180,
    height: 180,
    backgroundColor: 'white'
  },
  elevation: {
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 5,
    shadowOpacity: 0.1,
  },
  electricityText: {
    fontSize: 15,
  }
});