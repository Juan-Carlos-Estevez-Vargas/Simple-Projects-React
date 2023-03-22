import { useState } from "react";
import SearchBar from "./components/searchBar";
import styled from "styled-components";

/**
 * Estilos CSS para los botones.
 */
const Button = styled.button`
  padding: "10px";
  border-radius: "5px";
  border: none;
  background-color: white;
  border: solid 1px #ccc;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

const people = [
  {
    id: "people-01",
    title: "Juan Estevez",
  },
  {
    id: "people-02",
    title: "Laura Perez",
  },
  {
    id: "people-03",
    title: "Nelsy Rivera",
  },
  {
    id: "people-04",
    title: "Juan Rincón",
  },
  {
    id: "people-05",
    title: "Juana Estevez",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Reunión de Seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de Resultados",
  },
  {
    id: "calendar-03",
    title: "Donación de comida",
  },
  {
    id: "calendar-04",
    title: "Maratón Universitaria",
  },
  {
    id: "calendar-05",
    title: "Sesión de Fotografía",
  },
];

const emails = [
  {
    id: "email-01",
    title: "Mensaje de Seguimiento",
  },
  {
    id: "email-02",
    title: "Envío Revisión de Resultados",
  },
  {
    id: "email-03",
    title: "Confirmación Donación de comida",
  },
  {
    id: "email-04",
    title: "Retroalimentación Maratón Universitaria",
  },
  {
    id: "email-05",
    title: "Disgusto en Sesión de Fotografía",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");
  const [count, setCount] = useState(0);

  /**
   * Actualiza el estado de los filtros cuando se de click en
   * alguno de ellos.
   * @param {event} e
   */
  function handleClick(e) {
    const option = e.target.name;

    switch (option) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
    }
  }

  /**
   * Cambia el filtro según como se haya seleccionado.
   * @param {*} item
   */
  function handleItemSelected(item) {
    setSelection(item);
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">
        All
      </Button>
      <Button onClick={handleClick} name="people">
        People
      </Button>
      <Button onClick={handleClick} name="calendar">
        Calendar
      </Button>
      <Button onClick={handleClick} name="emails">
        Emails
      </Button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {selection ? <div>You Selected: {selection.title}</div> : ""}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
