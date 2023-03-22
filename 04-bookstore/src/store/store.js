import { useContext, useState, createContext } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([]);

  /**
   * Crea un nuevo item.
   * @param {Book} item
   */
  function createItem(item) {
    const temp = [...items];
    temp.push(item);
    setItems(temp);
  }

  /**
   * Obtiene un item en específico.
   * @param {Book} id
   * @returns item encontrado.
   */
  function getItem(id) {
    const item = items.find((item) => item.id === id);
    return item;
  }

  /**
   * Actualiza un item en específico.
   * @param {Book} item
   */
  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };
  }

  return (
    <AppContext.Provider value={{ items, createItem, getItem, updateItem }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
