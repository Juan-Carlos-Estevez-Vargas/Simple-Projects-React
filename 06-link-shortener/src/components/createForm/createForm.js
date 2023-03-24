import { useState } from "react";
import styles from "./input.module.css";

export default function CreateForm({ dispatch }) {
  const [url, setUrl] = useState("");

  /**
   * Agrega una nueva URL.
   * @param {event} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD", data: url });
  }

  /**
   * Actualiza el estado de la URL.
   * @param {event} e
   */
  function handleOnChange(e) {
    const value = e.target.value;
    setUrl(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        onChange={handleOnChange}
        value={url}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
