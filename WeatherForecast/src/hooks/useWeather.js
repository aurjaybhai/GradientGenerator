import React from "react";
import { useEffect, useState } from "react";

function useWeatherInfo(City) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${City}&count=1&language=en&format=json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res.results[0].latitude))
      .then((res) => setData(res.results[0].longitude));
  }, [City]);
  console.log(data);
  return data;
}

export default useWeatherInfo;
