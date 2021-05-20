import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import CoinTile from "./CoinTile";
import { AppContext } from "../HOC/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
`;

const CoinLists = ({ data, getCoins, topSection }) => {
  //const coinsL = useSelector((state) => state.listCoins.data);
  const [coinList, setcoinList] = useState({});
  const [, , , , favorites] = useContext(AppContext);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    if (isEmpty(coinList)) {
      setcoinList(data);
    }
  }, [data, coinList]);

  function getCoinsToDisplay() {
    return topSection ? favorites : Object.keys(coinList).slice(0, 100);
  }

  return (
    <div>
      {!isEmpty(coinList) ? (
        <>
          <h2 className="uppercase h2">
            {topSection ? (
              <span>Favourites coins</span>
            ) : (
              <span>Total Coin Lists: {Object.keys(coinList).length}</span>
            )}
          </h2>
          <CoinGridStyled>
            {getCoinsToDisplay().map((coinK, idx) => (
              <CoinTile
                topSection={topSection}
                coinK={coinK}
                key={idx}
                coinList={coinList}
              />
            ))}
          </CoinGridStyled>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default React.memo(CoinLists);
