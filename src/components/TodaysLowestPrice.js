import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

// Component that fetches todays prices and finds the lowest price and returns the object
export default function TodaysLowestPrice() {
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
        // Find the item with the lowest price in the filtered data
        const minPrice = Math.min(...filteredData.map((item) => item.price));
        // Find the item with the lowest price in the filtered data
        const minPriceItem = filteredData.find(
          (item) => item.price === minPrice
        );
        setData([minPriceItem]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.price} snt/kWh</Text>
        </View>
      ))}
    </View>
  );
}
