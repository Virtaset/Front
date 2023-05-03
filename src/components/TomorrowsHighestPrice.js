import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

// Component that fetches tomorrow's prices and finds the highest price and returns the object
export default function TomorrowsHighestPrice() {
  const [data, setData] = useState([]);

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
          <Text>{item.price.toFixed(2)} snt/kWh</Text>
        </View>
      ))}
    </View>
  );
}
