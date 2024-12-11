import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");

  //   navigator.geolocation.getCurrentPosition((v) => {
  //     console.log(v.coords.latitude);
  //     console.log(v.coords.longitude);
  //   });

  const lat = 37.456;
  const lon = 126.705;
  const API_KEY = "3af745e55c0152da567c5ffd089f9e00";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTemp((prev) => data.main.feels_like);
        setWeather((prev) => data.weather[0].main);
      });
  }, []);

  return (
    <h2 style={{ fontSize: "32px" }}>
      {weather} {temp}℃
    </h2>
  );
};

export default Weather;
