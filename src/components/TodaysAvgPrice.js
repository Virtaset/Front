import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

// Component that fetches todays prices and count average price of them
export default function AveragePrice() {
  const [average, setAverage] = useState(null);

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

  // If the average price has not been calculated yet, show "Loading..."
  if (!average) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text>
      {average}
    </Text>
  );
}
