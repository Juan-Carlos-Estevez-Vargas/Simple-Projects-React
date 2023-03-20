import { useState } from "react";

import "./todoApp.css";

export default function Todo({ item, onUpdate, onComplete, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.title ?? "");

  /**
   * Actualiza el valor del input cada que cambie su estado.
   * @param {*} e
   */
  function handleChange(e) {
    setValue(e.target.value);
  }

  /**
   * Actualiza una tarea.
   */
  function handleUpdate() {
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  /**
   * Permite actualizar el estado de una tarea.
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  /**
   * Permite setear una tarea como completada.
   * @param {*} e
   */
  function handleCheckboxChange(e) {
    onComplete(item.id, e.target.checked);
  }

  return (
    <div className="todo">
      {isEdit ? (
        <form onSubmit={handleSubmit} className="todoUpdateForm">
          <input
            className="todoInput"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button className="button" onClick={handleUpdate}>
            Update
          </button>
        </form>
      ) : (
        <div className="todoInfo">
          <input
            type={"checkbox"}
            onChange={handleCheckboxChange}
            checked={item.checked}
          />
          <span
            className="todoTitle"
            style={{
              color: item.completed ? "#ccc" : "",
              textDecoration: item.completed ? "line-through" : "",
            }}
          >
            {item.title}
          </span>
          <button className="button" onClick={() => setIsEdit(true)}>
            Edit
          </button>
          <button className="buttonDelete" onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
