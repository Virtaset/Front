import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { VictoryChart, VictoryTheme, VictoryBar } from "victory-native";


//Functional component to fetch the latest electricity prices
export default function LatestPrices() {
    const [latestPrices, setLatestPrices] = useState([]);

    //Fetch the electricity prices from the last 48 hours
    useEffect(() => {
        fetch('https://api.porssisahko.net/v1/latest-prices.json')
            .then(response => response.json())
            .then(responseData => {
                setLatestPrices(responseData.prices);
                //console.log(latestPrices);
            })
            .catch(err => console.error(err))
    });

    //New start and end dates for filtering the latestPrices array
    const newStartDate = new Date().setUTCHours(0, 0, 0, 0);
    const newEndDate = new Date().setUTCHours(24, 0, 0, 0);

    /*Filter the array to only include prices within the current day
    and reverse the array so it displays correclty in the victorychart */
    const filteredPrices = latestPrices.filter(price =>
        new Date(price.startDate) >= newStartDate && new Date(price.endDate) <= newEndDate);

    const arrangedPrices = filteredPrices.reverse();
    //console.log(arrangedPrices)

    
    /* Format the price.startDate from 'YYYY-MM-DDTHH:MM:SS.000Z' to just 'HH'
    to display it properly in the VictoryChart */
    for (const price of arrangedPrices) {
        const startDate = new Date(price.startDate);
        const startDateHours = startDate.getUTCHours();
        const formattedStartDate = `${startDateHours}`;

        price.startDate = formattedStartDate;
    }

    return (
        <VictoryChart
            theme={VictoryTheme.material}
            width={Dimensions.get('window').width}
            height={275}
        >
            <VictoryBar
                data={arrangedPrices}
                y='price'
                x="startDate"
                style={{
                    data: { stroke: "#c43a31" },
                }}
            />
        </VictoryChart>
    )
};