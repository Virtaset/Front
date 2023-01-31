import { useState, React } from 'react';
import { StyleSheet, View, Button, Alert, Text, TextInput } from 'react-native';

export default function ElectricityPrices()  {
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const [price, setPrice] = useState('')


  const getPrices = () => {
    fetch(`https://api.porssisahko.net/v1/price.json?date=${date}&hour=${hour}`)
    .then(response => response.json())
    .then(responseJson => setPrice(responseJson.price))
    .catch(error => {
      Alert.alert('Error', error);
    });
  }

  return (
    <View>
        <Text>Syötä päivämäärä:</Text>
        <TextInput style={styles.input}
        placeholder='VVVV-KK-PP'
        value={date}
        onChangeText={(val) => setDate(val)} />

        <Text>Syötä kellonaika:</Text>
        <TextInput style={styles.input}
        placeholder='0-23'
        value={hour}
        onChangeText={(val) => setHour(val)} />

        <Button onPress={getPrices} title='Hae hinta' />
        <Text>Sähkön hinta: {price} snt/kWh </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});