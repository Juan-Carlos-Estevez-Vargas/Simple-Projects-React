import { useMemo } from "react";
import styled from "styled-components";

/**
 * Estilos CSS para los marcadores o coincidencias.
 */
const StyledMarket = styled.span`
  background-color: yellow;
  font-wwigth: bolder;
  border-radius: 2px;
`;

/**
 * Estilos CSS para el resultado seleccionado.
 */
const StyledItem = styled.a`
  color: black;
  display: block;
  padding: 10px;
  border: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #4c91ba;
    color: white;
  }

  &:hover span {
    color: black;
  }
`;

export default function MarketItem({ item, query, onClick }) {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  /**
   * Obtiene la posición donde se encuentra la coincidencia de lo que
   * el usuario esta buscando.
   * @param {*} item
   * @param {String} query
   * @returns coincidencias con el texto que esta buscando el usuario.
   */
  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const right = item.title.slice(index + query.length);
    const center = item.title.slice(index, index + query.length);
    return {
      left,
      center,
      right,
    };
  }

  function handleClick() {
    onClick(item);
  }

  return (
    <StyledItem onClick={handleClick}>
      {left}
      <StyledMarket style={{ fontWeight: "bolder", backgroundColor: "yellow" }}>
        {center}
      </StyledMarket>{" "}
      {right}
    </StyledItem>
  );
}
