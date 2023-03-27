import { useAppContext } from "./calculatorState";

export default function Button({ type, value }) {
  const calculator = useAppContext();

  /**
   * Agrega un nuevo número a la pantalla, operación o
   * ejecuta una acción según el tipo de input que se
   * seleccione.
   */
  function handleClick() {
    switch (type) {
      case "number":
        calculator.addNumber(parseInt(value));
        break;
      case "operator":
        calculator.addOperation(value);
        break;
      case "action":
        calculator.executeAction(value);
        break;
      default:
    }
  }

  return (
    <button className="calculatorButton" onClick={handleClick}>
      {value}
    </button>
  );
}
