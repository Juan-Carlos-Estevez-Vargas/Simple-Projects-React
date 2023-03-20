import { useState } from "react";
import styles from "./emojiPicker.module.scss";

export default function EmojiSearch({ onSearch }) {
  const [value, setValue] = useState("");

  /**
   * Actualiza el estado del input para poder asignarle
   * valores nuevos.
   * @param {event} e
   */
  function handleChange(e) {
    setValue(e.target.value);
    onSearch(e);
  }

  return (
    <input
      className={styles.search}
      type="text"
      onChange={handleChange}
      value={value}
    />
  );
}
