import React, { useContext } from "react";
import styled from "styled-components";
import CoinTile from "./CoinTile";
import { AppContext } from "../HOC/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
`;

const CoinLists = ({ topSection }) => {
  const [coinList, , , , , , favorites, , , filteredCoins] =
    useContext(AppContext);

  /*   function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  } */

  function getLowerSectionCoins() {
    return filteredCoins && Object.keys(filteredCoins).length > 0
      ? Object.keys(filteredCoins)
      : Object.keys(coinList).slice(0, 100);
  }

  function getCoinsToDisplay() {
    return topSection ? favorites : getLowerSectionCoins();
  }

  return (
    <div>
      <h2 className="uppercase h2">
        {topSection ? (
          <span>Favourites coins</span>
        ) : (
          <span>Total Coin Lists: {Object.keys(coinList).length}</span>
        )}
      </h2>
      <CoinGridStyled>
        {getCoinsToDisplay().map((coinK) => (
          <CoinTile
            topSection={topSection}
            coinK={coinK}
            key={coinK}
            coinList={coinList}
          />
        ))}
      </CoinGridStyled>
    </div>
  );
};

export default React.memo(CoinLists);
