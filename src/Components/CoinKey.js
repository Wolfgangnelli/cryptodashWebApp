import React from "react";
import { SelectableTile } from "../Shared/Tile";
import CoinHeaderGrid from "../Settings/CoinHeaderGridStyled";
import CoinImage from "../Shared/CoinImage";

const CoinKey = ({ coinK, coinList }) => {
  let coin = coinList[coinK];

  return (
    <SelectableTile>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </SelectableTile>
  );
};

export default CoinKey;
