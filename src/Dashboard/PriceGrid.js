import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../HOC/AppProvider";
import PriceTile from "./PriceTile";

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin-top: 60px;
`;

const PriceGrid = () => {
  const [, , , , , , , , , , coinPrices] = useContext(AppContext);

  return (
    <PriceGridStyled>
      {Object.keys(coinPrices).map((key, idx) => (
        <PriceTile key={key} price={coinPrices[key]} sym={key} idx={idx} />
      ))}
    </PriceGridStyled>
  );
};

export default PriceGrid;
