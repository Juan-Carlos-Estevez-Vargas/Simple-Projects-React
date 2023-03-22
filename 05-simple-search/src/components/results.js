import { useEffect, useMemo, useState } from "react";
import MarketItem from "./marketItem";
import styled from "styled-components";

const ResultsContainer = styled.div`
  position: absolute;
  width: 400px;
  background: white;
  border: solid 1px #222;
  border-top: solid 1px transparent;
  margin-top: -3px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
`;

export default function Results({
  items,
  onItemSelected,
  query,
  onResultsCalculated,
}) {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);

  /**
   * Busca el índice donde inicia la coincidencia del texto que esta buscando
   * el usuario.
   * @param {*} items
   * @param {String} query
   * @returns
   */
  function findMatch(items, query) {
    const response = items.filter((item) => {
      return item.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });

    setResults(response);
    return response;
  }

  return (
    <ResultsContainer>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarketItem
              key={item.id}
              item={item}
              onClick={onItemSelected}
              query={query}
            />
          ))
        : ""}
    </ResultsContainer>
  );
}
