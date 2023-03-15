import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { VictoryChart, VictoryTheme, VictoryBar } from "victory-native";
import moment from "moment";

//Functional component to fetch the latest electricity prices
export default function LatestPrices() {
    const [latestPrices, setLatestPrices] = useState([]);

    //Fetch the latest prices from the API
    useEffect(() => {
        fetch('https://api.porssisahko.net/v1/latest-prices.json')
            .then(response => response.json())
            .then(responseData => {
                setLatestPrices(responseData.prices);
            })
            .catch(err => console.error(err))
    });

    //New start and end dates for filtering the latestPrices array
    const newStartDate = new Date().setHours(0, 0, 0, 0);
    const newEndDate = new Date().setHours(24, 0, 0, 0);

    //Filter the array to only include prices within the last 24 hours
    const filteredPrices = latestPrices.filter(price =>
        new Date(price.startDate) >= newStartDate && new Date(price.endDate) <= newEndDate);

    //Reverse the array so it shows prices from oldest to newest
    const arrangedPrices = filteredPrices.reverse();

    /*TODO: format the startDate to format 'HH',
    so it displays properly in the victorychart */

    const juu = arrangedPrices.forEach(function(obj) {
        var startDate = new Date(obj.startDate);
        obj.startDate = startDate.toTimeString();
        //console.log(vittu);
    })

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            width={Dimensions.get('window').width}
            height={250}
        >
            <VictoryBar
                data={vittu}
                y='price'
                x="startDate"
                style={{
                    data: { stroke: "#c43a31" },
                }}
            />
        </VictoryChart>
    )
};