import { forwardRef, useRef, useState, useEffect } from "react";
import { data as emojiList } from "./data";
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";
import styles from "./emojiPicker.module.scss";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(...emojiList);
  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmojis(emojiList);
      }
    });
  }, []);

  /**
   * Actualiza el estado de open en true o false.
   * Esto para mostrar el contenedor de emojis.
   */
  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  /**
   * Actualiza el estado de los emojis, permite renderizar un emoji
   * en específico cada que se busque por alguna palabra clave.
   * @param {event} e
   */
  function handleSearch(e) {
    const query = e.target.value.toLowerCase();

    if (!!query) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(query) ||
          emoji.keywords.toLowerCase().includes(query)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  }

  /**
   * Obtiene las coordenadas del cursor para insertar un emoji en dicha
   * posición y matener el foco del input en dicha coordenada.
   * @param {*} emoji
   */
  function handleOnClickEmoji(emoji) {
    const cursorPosition = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPosition);
    const next = text.slice(cursorPosition);

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
    inputRef.current.focus();
  }

  return (
    <div ref={containerRef} className={styles.inputContainer}>
      <button onClick={handleClickOpen} className={styles.emojiPickerButton}>
        😊
      </button>

      {isOpen ? (
        <div className={styles.emojiPickerContainer}>
          <EmojiSearch onSearch={handleSearch} />
          <div className={styles.emojiList}>
            {emojis.map((emoji) => (
              <EmojiButton
                key={emoji.symbol}
                emoji={emoji}
                onClick={handleOnClickEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);
