import { createContext, useContext, useState } from "react";

/**
 * Crea el contexto general de la aplicación.
 */
const AppContext = createContext({
  /* state */
  memory: null,
  operation: null,
  currentValue: 0,
  isDecimal: false,

  /* methods */
  addNumber: (value) => {},
  addOperation: (operation) => {},
  getResult: () => {},
  executeAction: () => {},
});

export default function CalculatorState({ children }) {
  const [memory, setMemory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isReset, setIsReset] = useState(true);
  const [isDecimal, setIsDecimal] = useState(false);

  /**
   * Agrega elementos de tipo número a la pantalla o punto
   * decimal.
   * @param {string} value
   */
  function handleAddNumber(value) {
    if (isReset) {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const point = isDecimal ? "." : "";
        const newValue = currentValue.toString() + point + value.toString();
        setCurrentValue(parseFloat(newValue));
        setIsReset(false);
        setIsDecimal(false);
      }
    } else {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const point = isDecimal ? "." : "";
        const newValue = currentValue.toString() + point + value.toString();
        setCurrentValue(parseFloat(newValue));
        setIsDecimal(false);
      }
      const newValue = currentValue.toString() + value;
      setCurrentValue(parseFloat(newValue));
    }
  }

  /**
   * Agrega una operación a la pantalla y obtiene el resultado.
   * @param {*} op
   */
  function handleAddOperation(op) {
    if (currentValue) {
      if (operation) {
        handleGetResult();
        setOperation(op);
      } else {
        setOperation(op);
        setMemory(currentValue);
        setCurrentValue(0);
        setIsReset(true);
      }
    }
  }

  /**
   * Ejecuta una operación matemática según el tipo de operación
   * seleccionada.
   */
  function handleGetResult() {
    let result = 0;

    if (currentValue && operation && memory) {
      switch (operation) {
        case "+":
          result = parseFloat(currentValue) + parseFloat(memory);
          break;
        case "-":
          result = parseFloat(memory) - parseFloat(currentValue);
          break;
        case "x":
          result = parseFloat(currentValue) * parseFloat(memory);
          break;
        case "/":
          result = parseFloat(memory) / parseFloat(currentValue);
          break;
        case "%":
          result = (parseFloat(memory) / 100) * parseFloat(currentValue);
          break;
        default:
      }

      setCurrentValue(result);
      setOperation(null);
      setMemory(result);
      setIsReset(true);
      setIsDecimal(false);
    }
  }

  /**
   * Limpia la pantalla.
   */
  function clean() {
    setCurrentValue(0);
    setOperation(null);
    setMemory(0);
    setIsReset(true);
    setIsDecimal(false);
  }

  /**
   * Elimina un elemento de la pantalla.
   */
  function deleteNumber() {
    const index = currentValue.toString().indexOf(".");
    if (index > 0) {
      const numberOfDecimals = currentValue.toString().slice(index + 1).length;
      if (numberOfDecimals === 1) {
        const min = Math.floor(currentValue);
        setCurrentValue(min);
      } else {
        const newNumber = parseFloat(currentValue).toFixed(
          numberOfDecimals - 1
        );
        setCurrentValue(newNumber);
      }
    } else {
      setCurrentValue(parseInt(currentValue / 10));
    }
  }

  /**
   * Cambia el signo de un valor o conjunto de valores.
   */
  function changeSign() {
    setCurrentValue(currentValue * -1);
  }

  /**
   * Convierte el valor actual a flotante o punto decimal.
   */
  function convertToFloat() {
    if (currentValue.toString().indexOf(".") > 0) {
    } else {
      handleAddNumber(".");
    }
  }

  /**
   * Ejecuta una acción según como sea seleccionada.
   * @param {string} action
   */
  function handleExecuteAction(action) {
    switch (action) {
      case "=":
        handleGetResult();
        break;
      case "AC":
        clean();
        break;
      case "DEL":
        deleteNumber();
        break;
      case "+/-":
        changeSign();
        break;
      case ".":
        convertToFloat();
        break;
      default:
    }
  }

  return (
    <AppContext.Provider
      value={{
        memory,
        operation,
        currentValue,
        isDecimal,
        addNumber: handleAddNumber,
        addOperation: handleAddOperation,
        getResult: handleGetResult,
        executeAction: handleExecuteAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
