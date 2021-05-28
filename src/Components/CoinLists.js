import React, { useContext /* useState, useEffect */ } from "react";
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
  /*   const [initialCoinNum, setinitialCoinNum] = useState(0);
  const [finalCoinNum, setfinalCoinNum] = useState(100);
  const [pages, setpages] = useState([]);

  const coinsPages = () => {
    let coinItems =
      filteredCoins && Object.keys(filteredCoins).length > 0
        ? Object.keys(filteredCoins).length
        : Object.keys(coinList).length;
    console.log(coinItems);
    let obj = filteredCoins || coinList;

    console.log(obj);
    for (let items = 0; items < coinItems; items + 100) {
      let onePage = {};
      onePage = Object.keys(obj).slice(items, items + 100);
      setpages((pages) => [...pages, onePage]);
    }
    console.log(pages.length);
  };
  coinsPages(); */
  /* 
  useEffect(() => {
    coinsPages();
  }, [coinList, filteredCoins]); */

  function getLowerSectionCoins() {
    return filteredCoins && Object.keys(filteredCoins).length > 0
      ? Object.keys(filteredCoins)
      : Object.keys(coinList).slice(0, 100);
  }

  function getCoinsToDisplay() {
    return topSection ? favorites : getLowerSectionCoins();
  }

  /*   handlePrevPage = () => {}; */

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
      {/*     {topSection ? null : (
        <div className="my-3 w-40 flex justify-between mx-auto">
          <button className="border border-yellow-500 p-2">
            <i className="fas fa-chevron-left"></i> Prev
          </button>
          <button className="border border-yellow-500 p-2">
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )} */}
    </div>
  );
};

export default React.memo(CoinLists);
