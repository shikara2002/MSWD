import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    axios
      .get("https://api.apixu.com/v1/current.json", {
        params: {
          key: "5a9f55d48e624e8294c200714190807",
          q: capital
        }
      })
      .then(response => {
        setWeather(response.data.current);
        setIcon(response.data.current.condition.icon);
        console.log(response);
      });
  }, [capital]);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <strong>temperature: </strong>
      {weather.temp_c} Celsius
      <br />
      <img src={icon} alt="current weather" />
      <br />
      <strong>wind: </strong> {weather.wind_kph} kph {weather.wind_dir}
    </div>
  );
};

export default Weather;