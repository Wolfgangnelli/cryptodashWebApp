import React, { useEffect, useState, useContext } from "react";
import Loading from "./Loading";
import CoinTile from "./CoinTile";
import { AppContext } from "../HOC/AppProvider";

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

  function getCoinToDisplay() {
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
          <div className="grid grid-cols-4 gap-4 pt-2">
            {getCoinToDisplay().map((coinK, idx) => (
              <CoinTile
                topSection={topSection}
                coinK={coinK}
                key={idx}
                coinList={coinList}
              />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default React.memo(CoinLists);
