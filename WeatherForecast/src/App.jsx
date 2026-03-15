import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox.jsx";
import useWeatherInfo from "./hooks/useWeather.js";

function WeatherForecast(latitude, longitude) {
  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m`,
    ).then((res) => res.json())
    .then((res) => )
  });
}

function App() {
  const [City, setCity] = useState("Kolkata");
  return (
    <>
      <div className="flex justify-center ">
        <h1>Weather forecast</h1>
        <InputBox City={City} setCity={setCity} />
        {/* <p onChange={(e) => setCity(e.target.value)}>City : {City}</p> // this is read only */}
        <p>City : {City}</p>
      </div>
    </>
  );
}

export default App;
