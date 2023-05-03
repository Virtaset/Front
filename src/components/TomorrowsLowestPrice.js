import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function TomorrowsLowestPrice() {
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
          <Text>{item.price.toFixed(2)} snt/kWh</Text>
        </View>
      ))}
    </View>
  );
}
