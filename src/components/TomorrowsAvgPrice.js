import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

// Component that fetches tomorrow's prices and returns the average price as a string
export default function TomorrowsAvgPrice() {
  const [average, setAverage] = useState();

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().slice(0, 10);

    fetch("https://api.porssisahko.net/v1/latest-prices.json")
      .then((response) => response.json())
      .then((json) => {
        // Filter the price data to only include tomorrow's prices
        const filteredData = json.prices.filter(
          (item) => item.startDate.slice(0, 10) === tomorrowString
        );

        // If there are no prices for tomorrow, set average to "Hinnat tulevat huomenna"
        if (filteredData.length === 0) {
          setAverage("Hinnat tulevat huomenna");
        } else {
          // Calculate the average price from the filtered data
          const sum = filteredData.reduce((acc, item) => acc + item.price, 0);
          const avg = sum / filteredData.length;

          setAverage(avg.toFixed(2) + " snt/kWh");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Text>{average}</Text>
  );
}
