import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

// Component that fetches todays prices and returns the average price as a string
export default function TodaysAveragePrice() {
  const [average, setAverage] = useState(0);

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

        setAverage(avg.toFixed(3));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Text>{average}</Text>
  )
}
