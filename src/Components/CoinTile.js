import React, { useContext } from "react";
import { SelectableTile, DisabledTile, DeletableTile } from "../Shared/Tile";
import CoinHeaderGrid from "../Settings/CoinHeaderGridStyled";
import CoinImage from "../Shared/CoinImage";
import { AppContext } from "../HOC/AppProvider";

const CoinTile = ({ coinK, topSection, coinList }) => {
  const [, , , , , , favorites, setFavorites] = useContext(AppContext);
  const MAX_FAVORITES = 10;
  let TileClass = SelectableTile;

  const isInFavorite = () => {
    return favorites.includes(coinK);
  };

  if (topSection) {
    TileClass = DeletableTile;
  } else if (isInFavorite()) {
    TileClass = DisabledTile;
  }

  const addCoin = () => {
    if (favorites.length < MAX_FAVORITES) {
      setFavorites([...favorites, coinK]);
    } else {
      alert("Sorry, max number of favorite coins is 10!");
    }
  };

  const removeCoin = () => {
    setFavorites(favorites.filter((coinKey) => coinKey !== coinK));
  };

  return (
    <TileClass onClick={topSection ? removeCoin : addCoin}>
      <CoinHeaderGrid
        topSection={topSection}
        name={coinList[coinK].CoinName}
        symbol={coinList[coinK].Symbol}
      />
      <CoinImage coin={coinList[coinK]} />
    </TileClass>
  );
};

export default CoinTile;
