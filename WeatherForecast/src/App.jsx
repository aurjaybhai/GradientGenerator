import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox.jsx";
import useWeatherInfo from "./hooks/useWeather.js";
import data from "./hooks/useWeather.js";

function WeatherForecast(latitude, longitude) {
  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m`,
    ).then((res) => res.json());
  });
}

function App() {
  const [City, setCity] = useState("Kolkata");
  const [Suggestions, setSuggestions] = useState([]);
  setSuggestions(res.results || []);).

  return (
    <>
      <div className="flex justify-center">
        <h1>Weather forecast</h1>
        <ul>
          {Suggestions.map((item, index) => (
            <li key={index}>
              <button type="button" onClick={() => onselect(item)}>
                {item.name} , {item.country}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );  
}

export default App;
