import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";

// Component that fetches todays prices and finds the highest price and returns the object
export default function HighestPrice() {
  const [data, setData] = useState([]);

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
        // Find the item with the highest price in the filtered data
        const maxPrice = Math.max(...filteredData.map((item) => item.price));

        // Find the item with the highest price in the filtered data
        const maxPriceItem = filteredData.find(
          (item) => item.price === maxPrice
        );
        setData([maxPriceItem]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>Highest Price: {item.price}</Text>
          <Text>Start Date: {item.startDate}</Text>
        </View>
      ))}
    </View>
  );
}
