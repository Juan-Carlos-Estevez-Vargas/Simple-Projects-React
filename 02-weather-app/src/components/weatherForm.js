import { useState } from "react";

import styles from "./styles/weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  /**
   * Actualiza la ciudad.
   * @param {event} e
   */
  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!city || city !== "") {
      onChangeCity(city);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Ingresa una ciudad"
      />
    </form>
  );
}
