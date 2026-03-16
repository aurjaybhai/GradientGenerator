import React from "react";
import { useEffect, useState } from "react";

function useWeatherInfo(City) {
const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${City}&count=5&language=en&format=json`,
    ).then((res) => {
      res.json()
    const first = res.results?.[0];

    setData({
      latitude: first?.latitude ?? null,
      longitude: first?.longitude ?? null,
    });}
  }, [City]);
  console.log(data);
  return data;
}

export default useWeatherInfo;
