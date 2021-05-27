import React from "react";
import { URL_CRYPTOCOMPARE } from "../Config/index";
import styled from "styled-components";

const CoinImage = styled.img`
  margin: auto;
`;

export default function ({ coin, spotlight }) {
  return (
    <CoinImage
      alt={coin.Symbol}
      src={`${URL_CRYPTOCOMPARE}${coin.ImageUrl}`}
      spotlight={spotlight}
      className="md:w-3/4 md:h-auto w-2/4 h-40 "
    />
  );
}
