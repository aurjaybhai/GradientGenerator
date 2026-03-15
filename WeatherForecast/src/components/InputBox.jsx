import React from "react";

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,wind_speed_10m

const InputBox = ({ City, setCity }) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Enter city name"
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
