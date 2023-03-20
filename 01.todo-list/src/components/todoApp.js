import { useState } from "react";
import Todo from "./todo";

import "./todoApp.css";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  /**
   * Actualiza el valor de título de la página.
   * @param {event} e
   */
  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  /**
   * Crea una nueva tarea con la fecha actual del sistema.
   * @param {event} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    const oldTodos = [...todos];
    oldTodos.unshift(newTodo);

    setTodos(oldTodos);
    setTitle("");
  }

  /**
   * Elimina una tarea en específico.
   * @param {string} id
   */
  function handleDelete(id) {
    const tempTodos = todos.filter((item) => item.id !== id);

    setTodos([...tempTodos]);
  }

  /**
   * Actualiza una tarea.
   * @param {string} id
   * @param {string} value
   */
  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos([...temp]);
  }

  /**
   * Actualiza el estado de una tarea entre completada y no
   * completada.
   * @param {string} id
   * @param {*} status
   */
  function handleCheckboxChange(id, status) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = status;
    setTodos([...temp]);
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input
          onChange={handleInputChange}
          value={title}
          className="todoInput"
        />
        <input value="Create todo" type={"submit"} className="buttonCreate" />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onComplete={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
}
