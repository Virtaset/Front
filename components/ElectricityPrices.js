import { useState, React, useEffect } from 'react';
import { StyleSheet, View, Button, Alert, Text, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';


//Functional component to get the current price of electricity
export default function ElectricityPrices()  {
    const [price, setPrice] = useState('')

    //Get the current date and time and format them using momentjs
    var date = moment().utcOffset('+02:00').format('YYYY-MM-DD')
    var hour = moment().utcOffset('+02:00').format('HH')

  //Fetch the current price using date and time defined above
  useEffect(() => {
    fetch(`https://api.porssisahko.net/v1/price.json?date=${date}&hour=${hour}`)
    .then(response => response.json())
    .then(responseData => {
      setPrice(responseData.price)
    })
    .catch(err => console.error(err))
  });

  //Return the current price and time
  return (
    <View style={[styles.container, styles.elevation]}>
        <FontAwesome name='bolt' size={30}/>
        <Text style={styles.electricityText}>Sähkön hinta klo {hour} :{"\n"} {price} c/kwh</Text>
    </View>
    
  );
}

//Preliminary styles for the app
const styles = StyleSheet.create({
  container: {
      width: 200,
      height: 200,
      borderRadius: 50,
      marginVertical: 120,
      marginLeft: 100,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
  },
  elevation: {
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 5,
    shadowOpacity: 0.1,
  },
  electricityText: {
      fontSize: 16,
  }
});