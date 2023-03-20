import { useState, useEffect } from "react";
import Loading from "./loading";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

import styles from "./styles/weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = "Weather | " + weather?.location?.name ?? "";
  }, [weather]);

  /**
   * carga la data del clima de la ciudad a renderizar
   * @param {string} city a obtener la data
   */
  async function loadInfo(city = "london") {
    console.log(
      `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    );
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);

      setTimeout(() => {
        setWeather({ ...json });
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Actualiza la ciudad cada que el usuario ingrese una nueva
   * @param {string} city ciudad a actualizar
   */
  function handleOnChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleOnChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}
