import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';

const CalculatorComponent = () => {
    const [propertyType, setPropertyType] = useState('');
    const [electricityCost, setElectricityCost] = useState(0);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Kerrostaloasunto', value: 'apartment' },
        { label: 'Rivitalo', value: 'terrace' },
        { label: 'Omakotitalo', value: 'detached' },
    ]);

    const calculateElectricityCost = async () => {
        let consumptionEstimate = 0;
        if (propertyType === 'apartment') {
            consumptionEstimate = 2000;
        } else if (propertyType === 'terrace') {
            consumptionEstimate = 11000;
        } else if (propertyType === 'detached') {
            consumptionEstimate = 18000;
        }
        // hae sähkön hinta
        //Get the current date and hour and format them suitable for the API
        var date = moment().utcOffset('+02:00').format('YYYY-MM-DD')
        var hour = moment().utcOffset('+02:00').format('HH')
        try {
            const response = await fetch(`https://api.porssisahko.net/v1/price.json?date=${date}&hour=${hour}`);
            const data = await response.json();
            const price = data.price;
            const cost = price * consumptionEstimate;
            setElectricityCost(cost.toFixed(2));
        } catch (error) {
            console.log(error)
        }

    };

    return (
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