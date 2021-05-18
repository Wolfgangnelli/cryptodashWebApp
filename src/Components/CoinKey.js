import React from "react";
import { SelectableTile } from "../Shared/Tile";

const CoinKey = ({ coin }) => {
  return <SelectableTile>{coin}</SelectableTile>;
};

export default CoinKey;
