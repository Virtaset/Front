import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Keyboard } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../styles/styleSheet.js';
import moment from 'moment';
import AveragePrice from './TodaysAvgPrice';

const CalculatorComponent = () => {
    const [isAdvEnabled, setIsAdvEnabled] = useState(false);
    const [isDayOrYear, setIsDayOrYear] = useState(false); //false = vuosi, true = päivä
    const [number, onChangeNumber] = useState(0);
    const [price, setPrice] = useState();

    const [propertyType, setPropertyType] = useState('');
    const [electricityCost, setElectricityCost] = useState(0);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Kerrostaloasunto', value: 'apartment' },
        { label: 'Rivitalo', value: 'terrace' },
        { label: 'Omakotitalo', value: 'detached' },
    ]);

    //Switches
    const toggleSwitch = () => {
        setIsAdvEnabled(previousState => !previousState)
    }
    const toggleSwitch1 = () => {
        setIsDayOrYear(previousState => !previousState)
    }

    useEffect(() => {
        fetch("https://api.porssisahko.net/v1/latest-prices.json")
          .then((response) => response.json())
          .then((json) => {
            // Get today's date in ISO format and slice it to "YYYY-MM-DD" format
            const today = new Date().toISOString().slice(0, 10);
    
            // Filter the price data to only include today's prices
            const filteredData = json.prices.filter(
              (item) => item.startDate.slice(0, 10) === today
            );
    
            // Calculate the average price from the filtered data
            const sum = filteredData.reduce((acc, item) => acc + item.price, 0);
            const avg = sum / filteredData.length;
    
            setPrice(avg.toFixed(3));
          })
          .catch((error) => console.error(error));
      }, []);

    const calculateElectricityCost = () => {
        let consumptionEstimate = 0;
        switch (propertyType) {
            case "apartment":
                consumptionEstimate = 2000;
                break;
            case "terrace":
                consumptionEstimate = 11000;
                break;
            case "detached":
                consumptionEstimate = 18000;
                break;
            default:
                consumptionEstimate = 10000;
                break;
        }
        let cost = price * consumptionEstimate;
        if (isDayOrYear) {
            cost = (cost / 365);
        }
        setElectricityCost(cost.toFixed(2));

    };
    const calculateElectricityCostv2 = () => {
        let cost = price * number;
        if (isDayOrYear) {
            cost = (cost / 365);
        }
        setElectricityCost(cost.toFixed(2));
        Keyboard.dismiss();
    }


    return (
        <View style={styles.calculatorcontainer}>
            <View style={styles.buttoncontainer}>
                <View>
                    <Text style={styles.label}>Edistynyt laskin</Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isAdvEnabled}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Päivän vai vuoden hinta?</Text>
                    <Switch
                        onValueChange={toggleSwitch1}
                        value={isDayOrYear}
                    />
                </View>
            </View>
            {isAdvEnabled ? (
                <View style={styles.container}>
                    <Text style={styles.title}>Sähkön edistynyt hintalaskuri</Text>
                    <Text style={styles.label}>Asunnon sähkönkulutus (kWh):</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Sähkön kulutus"
                        keyboardType="numeric"
                    />
                    <Button title="Laske" onPress={calculateElectricityCostv2} />
                    <Text style={styles.label}>Arvioitu sähkön hinta:</Text>
                    <Text style={styles.result}>{electricityCost}€</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.title}>Sähkön hintalaskuri</Text>
                    <Text style={styles.label}>Asunnon tyyppi:</Text>
                    <DropDownPicker
                        open={open}
                        value={propertyType}
                        items={items}
                        setOpen={setOpen}
                        setValue={setPropertyType}
                        setItems={setItems}
                    />
                    <Button title="Laske" onPress={calculateElectricityCost} />
                    <Text style={styles.label}>Arvioitu sähkön hinta:</Text>
                    <Text style={styles.result}>{electricityCost}€</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginVertical: 120,
        marginLeft: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '80%',
    },
    result: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

export default CalculatorComponent;